import classNames from "classnames";
import ReactPlayer from "react-player";
import styles from "./ResponsiveVideo.module.scss";

export default function ResponsiveVideo({ url, classNameProp }) {
	return (
		<div className={classNames(styles.playerWrapper, classNameProp)}>
			<ReactPlayer
				className={styles.reactPlayer}
				url={url}
				light={true}
				width="100%"
				height="100%"
			/>
		</div>
	);
}
