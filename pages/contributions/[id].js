import { ContributionPageTemplate } from "../../components/PageTemplate";
import classNames from "classnames";
import styles from "../../styles/contributions.module.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getIds, getSingleData } from "../../lib/contributions";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import ExportedImage from "next-image-export-optimizer";
import Zoom from "react-medium-image-zoom";

export default function Contribution({ data }) {
	const { basePath } = useRouter();
	const masonryBreakpoints = {
		default: 4,
		1400: 3,
		1200: 3,
		992: 2,
		768: 2,
		576: 1,
	};

	return (
		<ContributionPageTemplate metaTitle={data.title}>
			<Col
				sm={{ span: 12, offset: 0 }}
				md={{ span: 10, offset: 1 }}
				lg={{ span: 8, offset: 2 }}
				xl={{ span: 8, offset: 2 }}
				className={classNames(styles.pageTitle, "mb-5")}
			>
				<h6 className={classNames(styles.category, "mt-5", "mb-2")}>{data.type}</h6>
				<h1 className={classNames("mt-0", "mb-2")}>{data.title}</h1>
				<p className={classNames("mt-0", "mb-0")}>{data.authors.map((d) => `${d.name} ${d.surname}`).join(", ")}</p>
				{/* {data.keywords && <p>{data.keywords.split(";").join(", ")}</p>} */}
			</Col>

			<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} className={classNames("mb-5", styles.gallery)}>
				<ResponsiveMasonry columnsCountBreakPoints={masonryBreakpoints} className={classNames(styles.contributionGallery)}>
					<Masonry gutter={"1.5rem"}>
						{data.images.map((d, i) => (
							<Zoom key={"img-" + i} zoomMargin={20}>
								<div key={"img-" + i} className={classNames(styles.thumbnail)}>
									<ExportedImage
										key={"img-" + i}
										src={basePath + "/images/contributions-media/" + data.pc_id + "/" + d.src}
										alt={"Image of " + data.title}
										layout="responsive"
										width={d.width}
										height={d.height}
										placeholder="blur"
									/>
								</div>
							</Zoom>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</Col>
			<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
				<p className={classNames("mb-5")} style={{ whiteSpace: "pre-line" }}>
					{data.description.split("\n").join("\n")}
				</p>
				{data.website && (
					<p className={classNames("mb-5")}>
						<a className={classNames(styles.projectLink)} href={data.website}>
							{data.website.replace("https://", "").replace("http://", "").replace("www.", "")}
						</a>
					</p>
				)}
			</Col>
			{/* {data.video && (
				<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} className={classNames("mb-5")}>
					<h5>Video</h5>
					<p>{data.video}</p>
				</Col>
			)} */}
			<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
				<h5>Artist{data.authors.length > 1 ? "s" : ""} bio</h5>
			</Col>
			{data.authors.map((author, i) => (
				<Col key={"auth" + i} sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: (i % 3) + 1 }}>
					<Row className={classNames("d-flex", "align-items-center", "mb-5")}>
						<Col sm={2}>
							{author.images &&
								author.images.map((authImage, i) => (
									<div className={classNames({ "mt-3": i > 0 })} key={"img-author-" + authImage} style={{ maxWidth: "30vw" }}>
										<ExportedImage
											src={basePath + "/images/contributions-media/" + data.pc_id + "/" + authImage.src}
											alt={"Image of " + data.title}
											layout="responsive"
											width={authImage.width}
											height={authImage.height}
											placeholder="blur"
										/>
									</div>
								))}
						</Col>
						<Col sm={7}>
							<p className={classNames("mt-0", "mb-0", "fw-semibold")}>
								{!author.website && (
									<a className={classNames(styles.authorLink)}>
										{author.name} {author.surname}
									</a>
								)}
								{author.website && (
									<a className={classNames(styles.authorLink)} href={author.website}>
										{author.name} {author.surname}
									</a>
								)}
							</p>

							{author.bio && <p className={classNames(styles.bio, "mb-0")}>{author.bio}</p>}
						</Col>
					</Row>
				</Col>
			))}
		</ContributionPageTemplate>
	);
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const paths = getIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
	const data = getSingleData(params.id);
	return {
		props: {
			data,
		},
	};
}
