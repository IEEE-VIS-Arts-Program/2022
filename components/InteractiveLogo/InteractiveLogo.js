import { Container, Row, Col } from "react-bootstrap";
import styles from "./InteractiveLogo.module.scss";
import logoDraft from "./design identity brief.pptx.png";

export default function InteractiveLogo() {
	return (
		<Container fluid>
			<Row>
				<Col className="text-center">
					<img src={logoDraft.src} className="img-fluid" />
				</Col>
			</Row>
		</Container>
	);
}
