import ReactPlayer from "react-player";
import styles from "./ResponsiveVideo.module.scss";

export default function ResponsiveVideo({ url }) {
	return (
		<div className={styles.playerWrapper}>
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
