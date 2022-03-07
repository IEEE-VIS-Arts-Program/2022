import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
	return (
		<Container className={styles.footer} fluid>
			<Container>
				<Row>
					<Col>
						Logo
					</Col>
					<Col>
						Sponsors
					</Col>
					<Col>
						Past editions
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
