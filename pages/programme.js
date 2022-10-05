import PageTemplate from "../components/PageTemplate/PageTemplate";
import classNames from "classnames";
// import InteractiveLogo from "../components/InteractiveLogo";
import { getProgrammeData } from "../lib/programme";
import { useState, useEffect } from "react";
import { groups as d3Groups } from "d3";
import styles from "../styles/Programme.module.scss";
import Link from "next/link";

export default function Programme({ programmeData }) {
	const [programme, setProgramme] = useState([]);
	useEffect(() => {
		const nestedData = d3Groups(
			programmeData,
			(d) => d.session_name,
			(d) => d.group
		);
		setProgramme(nestedData);
	}, [programmeData]);
	return (
		<PageTemplate metaTitle="Organizers">
			<h1 className={classNames("Xtext-gradient", "page-title")}>Programme</h1>
			<div className={classNames(styles.grid)}>
				{programme.map((session, i) => (
					<div key={"session" + i} className={classNames(styles.session)}>
						<h5>{session[0]}</h5>
						<p>
							{session[1][0][1][0].session_date} {session[1][0][1][0].session_time}
						</p>
						<p>{session[1][0][1][0].session_hosts.split(";").join(", ")}</p>
						{session[1].map((group, ii) => (
							<div key={"group" + ii} dataname={group[0]} className={classNames(styles.group)}>
								{group[1].map((talk, iii) => (
									<div key={"talk" + iii}>
										<p>{talk.time}</p>
										<h6>{talk.title}</h6>
										<p>{talk.speaker}</p>
										{talk.contribution_id && (
											<p>
												<Link href={"/contributions/" + talk.contribution_id}>Read more</Link>
											</p>
										)}
									</div>
								))}
							</div>
						))}
					</div>
				))}
			</div>
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
