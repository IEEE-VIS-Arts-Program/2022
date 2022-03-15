import styles from "./Colophon.module.scss";
import classNames from "classnames";
import visapLogo from "../../images/logo-visap.png";

export default function Colophon() {
	return (
		<div className={classNames(styles.colophon, "mt-4", "ms-3")}>
			<img className={classNames(styles.logo)} src={visapLogo.src} />
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
