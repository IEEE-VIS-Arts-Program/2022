import styles from "./Header.module.scss";
import classNames from "classnames";
import visapLogo from "../../images/logo-visap.png";
import Link from "next/link";
export default function Header() {
	return (
		<header className={classNames("py-3", styles.header)}>
			<Link href="/">
				<a className={classNames(styles.navLink, styles.pos2)}>Home</a>
			</Link>
			<Link href="/call-for-entries">
				<a className={classNames(styles.navLink, styles.pos1)}>
					Call for Entries
				</a>
			</Link>
			<Link href="/submission">
				<a className={classNames(styles.navLink, styles.pos4)}>Submission</a>
			</Link>
			<Link href="/organizers">
				<a className={classNames(styles.navLink, styles.pos3)}>Organizers</a>
			</Link>
		</header>
	);
}
