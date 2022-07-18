import styles from "./Dates.module.scss";
import classNames from "classnames";
import { Col, Container, Row } from "react-bootstrap";

export default function Dates() {
	return (
		<>
			<Row>
				<Col xs={12} md={6}>
					<p className={classNames("mb-sm-0")}>Call opening:</p>
				</Col>
				<Col xs={12} md={6}>
					<p>April 2022</p>
				</Col>
				<Col xs={12} md={6}>
					<p className={classNames("mb-sm-0")}>Submissions deadline:</p>
				</Col>
				<Col xs={12} md={6}>
					<p>
						<del>June 2, 2022</del> June 9, 2022
					</p>
				</Col>
				<Col xs={12} md={6}>
					<p className={classNames("mb-sm-0")}>Notifications of acceptance:</p>
				</Col>
				<Col xs={12} md={6}>
					<p><del>July 18, 2022</del> July 19, 2022</p>
				</Col>
				<Col xs={12} md={6}>
					<p className={classNames("mb-sm-0")}>
						Final / Camera ready submissions:
					</p>
				</Col>
				<Col xs={12} md={6}>
					<p>August 11, 2022</p>
				</Col>
			</Row>
			<p>
				All deadlines are at{"  "}
				<a href="https://www.worldtimeserver.com/time-zones/aoe/#:~:text=The%20current%20time%20and%20date%20right%20now&text=Anywhere%20on%20Earth%20or%20AoE,offset%20of%20%2D%2012%3A00">
					AOE
				</a>
				.<br />
				Submit using the{" "}
				<a href="https://new.precisionconference.com/vgtc">
					Precision Conference System (PCS)
				</a>
				.
			</p>
		</>
	);
}
