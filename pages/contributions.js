import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import stylesPageTemplate from "../components/PageTemplate/PageTemplate.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames";

import { getContributionsData } from "../lib/contributions";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../styles/contributions.module.scss";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";

export default function Contributions({ allContributionsData, metaContent }) {
	const { basePath } = useRouter();
	const masonryBreakpoints = {
		default: 4,
		1400: 4,
		1200: 3,
		992: 2,
		768: 2,
		576: 1,
	};
	return (
		<>
			<Head>
				<title>{"Selected Contributions | VISAP'22"}</title>
				<meta name="description" content={metaContent} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className={classNames({ [stylesPageTemplate.windowFrame]: false })}>
				<Container>
					<Row>
						<Col
							sm={{ span: 12, offset: 0 }}
							md={{ span: 10, offset: 1 }}
							lg={{ span: 8, offset: 2 }}
							xl={{ span: 8, offset: 2 }}
							className={classNames(stylesPageTemplate.pageTitle, "mb-5")}
						>
							<h1 className={classNames("text-gradient", "page-title")}>Selected Contributions</h1>
							<div id="contributions-list" className={classNames("XstickyTitleSection")}>
								<h6 className={classNames("Xsticky-top")}><span style={{color: "var(--pink)"}}>Artworks</span>, <span style={{color: "var(--azure)"}}>Pictorials and Papers</span></h6>
								{/* <p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p> */}
							</div>
						</Col>
						<Col
							sm={{ span: 12, offset: 0 }}
							md={{ span: 10, offset: 1 }}
							// lg={{ span: 8, offset: 2 }}
							// xl={{ span: 8, offset: 2 }}
							className={classNames(stylesPageTemplate.pageTitle, "mb-5")}
						>
							<ResponsiveMasonry columnsCountBreakPoints={masonryBreakpoints}>
								<Masonry gutter={"1.5rem"}>
									{allContributionsData.map((d, i) => (
										<Link key={"cont" + i} href={"/contributions/" + d.id} passHref>
											<div
												key={d.id}
												dataname={d.id}
												className={classNames(styles.contribution)}
												style={{
													borderColor: `var(${d.type === "artwork" ? "--pink" : "--azure"})`,
													boxShadow: `7px 7px 2px 0px var(${d.type === "artwork" ? "--pink" : "--azure"})`,
												}}
											>
												<div className={classNames(styles.thumbnail)}>
													<ExportedImage
														src={basePath + "/images/contributions-media/" + d.pc_id + "/" + d.images[0]}
														alt={"Preview image of " + d.title}
														layout="fill"
														objectFit="cover"
														placeholder="blur"
													/>
												</div>
												<div className="px-2 pb-2">
													<h6 className={classNames(styles.category, "mt-2", "mb-1")}>{d.type}</h6>
													<h5 className={classNames(styles.title, "mb-2")}>{d.title}</h5>
													<p className={classNames(styles.authors, "mb-1")}>{d.authors.map((d) => `${d.name} ${d.surname}`).join(", ")}</p>
													<a className={classNames(styles.readMore, "m-0")}>Read more</a>
												</div>
											</div>
										</Link>
									))}
								</Masonry>
							</ResponsiveMasonry>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</>
	);
}

Contributions.defaultProps = {
	submenu: [],
	metaContent:
		"The VIS Arts Program (VISAP) is a mini-conference and exhibition where visualization researchers, designers, and artists come together to discuss works at the intersection of data visualization, art and design.",
};

export async function getStaticProps() {
	const allContributionsData = getContributionsData();
	return {
		props: {
			allContributionsData,
		},
	};
}

///////////////////////////////////////////////////////////////////////////////

function getRandomItem(arr) {
	// get random index value
	const randomIndex = Math.floor(Math.random() * arr.length);

	// get random item
	const item = arr[randomIndex];

	return item;
}
