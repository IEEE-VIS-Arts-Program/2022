import styles from "./Header.module.scss";
import classNames from "classnames";
import visapLogo from "../../images/logo-visap.png";
export default function Header() {
	return (
		<header className={classNames("py-3", styles.header)}>
			{/* <div>
				<img className={classNames("img-fluid")} src={visapLogo.src} />
				<h6>
					The IEEE VIS 2022
					<br />
					Arts Program
				</h6>
				<p>
					Hybrid (on-site and virtual)
					<br />
					October 16-21, 2022
				</p>
			</div>
			<nav>navigation</nav>
			<div>Sponsors</div> */}
			<div className={classNames(styles.navLink, styles.pos1)}>Home</div>
			<div className={classNames(styles.navLink, styles.pos2)}>Call for Entries</div>
			<div className={classNames(styles.navLink, styles.pos3)}>Submission</div>
			<div className={classNames(styles.navLink, styles.pos4)}>Organizers</div>
		</header>
	);
}
