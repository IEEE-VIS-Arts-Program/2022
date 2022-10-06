import PageTemplate from "../components/PageTemplate/PageTemplate";
import classNames from "classnames";
// import InteractiveLogo from "../components/InteractiveLogo";
import { getProgrammeData } from "../lib/programme";
import { useState, useEffect } from "react";
import { groups as d3Groups } from "d3";
import styles from "../styles/Programme.module.scss";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { BsArrowRightCircle as LinkIcon } from "react-icons/bs";
import { FaMapMarkerAlt as LocalIcon } from "react-icons/fa";
import { BiWorld as RemoteIcon } from "react-icons/bi";
import { DateTime } from "luxon";
// import { getTimeZones, rawTimeZones, timeZonesNames, abbreviations } from "@vvo/tzdb";
import { timeZonesNames } from "@vvo/tzdb";

export default function Programme({ programmeData }) {
	const defaultZone = "America/Chicago";
	let tempRemoteZone = defaultZone;

	// get remote zone
	try {
		const dt = DateTime.now();
		tempRemoteZone = dt.zoneName;
	} catch (err) {
		console.warn("Can't get remote timezone");
		console.error(err);
	}

	// list of zones
	const timezonesList = timeZonesNames.map((d) => ({ name: d, selected: d === tempRemoteZone }));

	const [programme, setProgramme] = useState([]);
	const [remoteZone, setRemoteZone] = useState(tempRemoteZone);

	useEffect(() => {
		programmeData.forEach((d) => {
			d.session_date_obj = DateTime.fromISO(d.session_date, { zone: defaultZone });
			d.session_time_obj = d.session_time.split("-").map((dd) => DateTime.fromISO(d.session_date + "T" + dd + ":00", { zone: defaultZone }));
		});
		const nestedData = d3Groups(
			programmeData,
			(d) => d.session_name,
			(d) => d.group
		);
		setProgramme(nestedData);
	}, [programmeData]);
	return (
		<PageTemplate metaTitle="Programme">
			<h1 className={classNames("Xtext-gradient", "page-title")}>Programme</h1>
			<Row className={classNames("mb-4")}>
				<Col>
					<p>
						VISAP 2022 takes place in Oklahoma City, USA.
						<br />
						If you follow from remote, you can convert the schedule to your local time.
					</p>
					<h6 className={classNames("m-0", "mb-2", styles.info)}>
						<LocalIcon /> <span className={classNames()}>Conference timezone is</span> <span className="fw-bold">Oklahoma City ({defaultZone})</span>
					</h6>
					{/* <h6 className={classNames("m-0", styles.info)}>
						<RemoteIcon /> <span>Your timezone:</span> <span className="fw-bold">{remoteZone}</span>
					</h6> */}
					<h6 className={classNames("m-0", "d-inline", styles.info)}>
						<RemoteIcon /> <span>Your timezone is </span>
					</h6>
					<select defaultValue={remoteZone} onChange={(event) => setRemoteZone(event.target.value)}>
						{timezonesList.map((zone) => (
							<option key={zone.name} value={zone.name}>
								{zone.name}
							</option>
						))}
					</select>
				</Col>
			</Row>
			<Row className={classNames(styles.grid)}>
				{programme.map((session, i) => (
					<Col md="12" key={"session" + i} className={classNames(styles.session, "mb-4")}>
						<h3 className={classNames("m-0")}>{session[0]}</h3>
						<p className={classNames("m-0", styles.hostedBy)}>Hosted by {session[1][0][1][0].session_hosts.split(";").join(" and ")}</p>
						<h6 className={classNames("m-0", styles.info)}>
							<LocalIcon /> {session[1][0][1][0].session_date_obj.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} from{" "}
							{session[1][0][1][0].session_time_obj[0].toLocaleString(DateTime.TIME_SIMPLE)} to{" "}
							{session[1][0][1][0].session_time_obj[1].toLocaleString(DateTime.TIME_SIMPLE)}
						</h6>
						<h6 className={classNames("m-0", "mb-3", styles.info)}>
							<RemoteIcon /> {session[1][0][1][0].session_date_obj.setZone(remoteZone).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} from{" "}
							{session[1][0][1][0].session_time_obj[0].setZone(remoteZone).toLocaleString(DateTime.TIME_SIMPLE)} to{" "}
							{session[1][0][1][0].session_time_obj[1].setZone(remoteZone).toLocaleString(DateTime.TIME_SIMPLE)}
						</h6>
						{session[1].map((group, ii) => (
							<div key={"group" + ii} dataname={group[0]} className={classNames(styles.group, { [styles.separated]: ii !== session[1].length - 1 })}>
								{group[1].map((talk, iii) => (
									<div key={"talk" + iii} className={classNames(styles.talk)}>
										<p className={classNames("m-0")}></p>
										{talk.contribution_id && (
											<>
												<h5 className={classNames("m-0", "d-inline", "fw-bolder", styles.title)}>
													{talk.title}
													<Link href={"/contributions/" + talk.contribution_id}>
														<a>
															{" "}
															<LinkIcon />
														</a>
													</Link>
												</h5>
											</>
										)}
										{!talk.contribution_id && <h5 className={classNames("m-0", "fw-bolder", styles.title)}>{talk.title}</h5>}
										<p className={classNames("m-0", styles.authors)}>{talk.speaker}</p>
									</div>
								))}
							</div>
						))}
					</Col>
				))}
			</Row>
		</PageTemplate>
	);
}

export async function getStaticProps() {
	const programmeData = getProgrammeData();
	return {
		props: {
			programmeData,
		},
	};
}
