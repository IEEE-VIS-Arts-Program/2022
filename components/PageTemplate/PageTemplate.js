import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./PageTemplate.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Colophon from "../Colophon";
import classNames from "classnames";

export default function PageTemplate({ metaTitle, metaContent, children }) {
	return (
		<>
			<Head>
				<title>{metaTitle}</title>
				<meta name="description" content={metaContent} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className={styles.windowFrame}>
				<Container fluid>
					<Row>
						<Col md={3}>
							<Colophon />
						</Col>
						<Col
							md={{ span: 6, offset: 0 }}
							className={classNames(styles.pageTitle)}
						>
							{metaTitle && (
								<h1 className={classNames("text-gradient")}>{metaTitle}</h1>
							)}
						</Col>
					</Row>
				</Container>
				{children}
				<Footer />
			</div>
		</>
	);
}

PageTemplate.defaultProps = {
	metaContent: "The IEEE VIS Art Program forum.",
};
