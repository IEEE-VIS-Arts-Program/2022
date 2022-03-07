import { Container, Row, Col } from "react-bootstrap";
import styles from "./InteractiveLogo.module.scss";
import logoDraft from "./design identity brief.pptx.png";

export default function InteractiveLogo() {
	return (
		<Container fluid>
			<Row>
				<Col className="text-center">
					<Img src={logoDraft.src} className="img-fluid" alt="" />
				</Col>
			</Row>
		</Container>
	);
}
