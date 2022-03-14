import { Container, Row, Col } from "react-bootstrap";
import styles from "./InteractiveLogo.module.scss";
import logoDraft from "../../images/lettering.png";
import classNames from "classnames";

export default function InteractiveLogo() {
	return (
		<div className={classNames(styles.container)}><img src={logoDraft.src} className="img-fluid" alt="" /></div>
	);
}
