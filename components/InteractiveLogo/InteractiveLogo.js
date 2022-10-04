import styles from "./InteractiveLogo.module.scss";
// import logoDraft from "../../images/lettering.png";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { initLogo } from "./logo";
import { useRouter } from "next/router";
import data from "./data.json";

export default function InteractiveLogo() {
	const { basePath } = useRouter();
	const box = useRef();

	useEffect(() => {
		data.basePath = basePath;
		initLogo(box.current, data);
	}, [basePath]);

	return (
		<div className={classNames(styles.container)} ref={box}>
			{/* <img src={logoDraft.src} className="img-fluid" alt="" /> */}
		</div>
	);
}
