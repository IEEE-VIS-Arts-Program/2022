import styles from "./Colophon.module.scss";
import classNames from "classnames";
import visapLogo from "../../images/logo-visap.png";

export default function Colophon() {
	return (
		<div>
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
	);
}
