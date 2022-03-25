import styles from "./InteractiveLogo.module.scss";
import logoDraft from "../../images/lettering.png";
import classNames from "classnames";
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import data from "./data.json";
import { initLogo } from "./logo";

export default function InteractiveLogo() {
	const box = useRef();

	useEffect(() => {
		initLogo(box.current)
	}, []);

	return (
		<div className={classNames(styles.container)} ref={box}>
			{/* <img src={logoDraft.src} className="img-fluid" alt="" /> */}
		</div>
	);
}

