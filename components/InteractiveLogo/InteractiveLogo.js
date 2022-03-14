import { Container, Row, Col } from "react-bootstrap";
import styles from "./InteractiveLogo.module.scss";
import logoDraft from "../../images/lettering.png";

export default function InteractiveLogo() {
	return (
		<img src={logoDraft.src} className="img-fluid" alt="" />
	);
}
