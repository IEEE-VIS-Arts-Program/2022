import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./PageTemplate.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Colophon from "../Colophon";
import classNames from "classnames";

export default function PageTemplate({ metaTitle, metaContent, children, submenu }) {
	return (
		<>
			<Head>
				<title>{metaTitle+" | VISAP'22"}</title>
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
								{/* <div>
									{submenu.map(d=><a key={d}>{d.innerText}</a>)}
								</div> */}
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
	submenu: [],
	metaContent: "The VIS Arts Program (VISAP) is a mini-conference and exhibition where visualization researchers, designers, and artists come together to discuss works at the intersection of data visualization, art and design."
};
