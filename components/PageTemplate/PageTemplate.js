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
						<Col
							xs={{ span: 12, offset: 0 }}
							sm={{ span: 12, offset: 0 }}
							md={{ span: 10, offset: 1 }}
							lg={{ span: 3, offset: 0 }}
							xl={{ span: 3, offset: 0 }}
							className={classNames("")}
						>
							<div
								className={classNames("sticky-top")}
								style={{ top: "calc(var(--header-thickness) + 1rem)" }}
								id="colophon-container"
							>
								<Colophon />
							</div>
						</Col>
						<Col
							// xs={}
							sm={{ span: 12, offset: 0 }}
							md={{ span: 10, offset: 1 }}
							lg={{ span: 8, offset: 0 }}
							xl={{ span: 7, offset: 0 }}
							className={classNames(styles.pageTitle, "mb-5")}
						>
							{children}
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</>
	);
}

PageTemplate.defaultProps = {
	metaContent: "The IEEE VIS Art Program forum.",
};
