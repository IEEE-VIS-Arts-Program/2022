import styles from "./Colophon.module.scss";
import classNames from "classnames";
import visapLogo from "../../images/logo-visap.png";
import visapLogoLight from "../../images/logo-white.svg";
import Link from "next/link";

export default function Colophon({lightVariant}) {
	return (
		<div className={classNames(styles.colophon)}>
			<Link href="/">
				<a>
					{!lightVariant && <img className={classNames(styles.logo)} src={visapLogo.src} alt="VISAP22 logo" />}
					{lightVariant && <img className={classNames(styles.logo)} src={visapLogoLight.src} alt="VISAP22 logo" />}
				</a>
			</Link>
			<p>
				The IEEE VIS 2022
				<br />
				Arts Program
			</p>
			<p>
				Hybrid (on-site and virtual)
				<br />
				October 16-21, 2022
			</p>
		</div>
	);
}
