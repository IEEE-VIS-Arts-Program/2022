import styles from "./Header.module.scss";
import classNames from "classnames";
import visapLogo from "../../images/logo-visap.png";
import Link from "next/link";
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
			<div className={classNames(styles.navLink, styles.pos1)}>
				<Link href="/">Home</Link>
			</div>
			<div className={classNames(styles.navLink, styles.pos2)}>
				<Link href="/call-for-entries">Call for Entries</Link>
			</div>

			<div className={classNames(styles.navLink, styles.pos4)}>
				<Link href="/submission">Submission</Link>
			</div>
			<div className={classNames(styles.navLink, styles.pos3)}>
				<Link href="/organizers">Organizers</Link>
			</div>
		</header>
	);
}
