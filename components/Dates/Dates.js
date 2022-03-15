import styles from "./Dates.module.scss";
import classNames from "classnames";

export default function Dates() {
	return (
		<>
			{/* // <>
			// 	<p>Submissions open by early April 2022.</p>
			// 	<p>All submissions are due by June 2, 2022.</p>
			// 	<p>Notifications of acceptance will be made by July 14, 2022.</p>
			// 	<p>Final / Camera ready submissions are due by August 11, 2022.</p>
			// </> */}
			<p className={classNames(styles.datesGrid)}>
				<span>Call opening</span>
				<span>Early April 2022</span>
				<span>Submissions deadline</span>
				<span>June 2, 2022</span>
				<span>Notifications of acceptance</span>
				<span>July 14, 2022</span>
				<span>Final / Camera ready submissions</span>
				<span>August 11, 2022</span>
			</p>
			<p>
				All deadlines are at {" "}
				<a href="https://www.worldtimeserver.com/time-zones/aoe/#:~:text=The%20current%20time%20and%20date%20right%20now&text=Anywhere%20on%20Earth%20or%20AoE,offset%20of%20%2D%2012%3A00">
					AOE
				</a>
				.
			</p>
		</>
	);
}
