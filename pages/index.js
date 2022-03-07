import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import InteractiveLogo from "../components/InteractiveLogo";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>VISAP22</title>
				<meta name="description" content="The IEEE VIS Art Program forum." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container fluid>
				<Row>
					<Col>
						<InteractiveLogo />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col md={8}>
						<h1>Visap sponsors</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={8}>
						<h1>Nostrud exercitation</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
