import { ContributionPageTemplate } from "../../components/PageTemplate";
import classNames from "classnames";
import styles from "../../styles/contributions.module.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getIds, getSingleData } from "../../lib/contributions";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

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
				<h6 className={classNames(styles.category, "mt-5", "mb-2")}>{data.type + " " + data.pc_id}</h6>
				<h1 className={classNames("mt-0", "mb-2")}>{data.title}</h1>
				<p className={classNames("mt-0", "mb-0")}>{data.authors.map((d) => `${d.name} ${d.surname}`).join(", ")}</p>
				{/* {data.keywords && <p>{data.keywords.split(";").join(", ")}</p>} */}
			</Col>

			<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} className={classNames("mb-5")}>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} className={classNames(styles.contributionGallery)}>
					<Masonry gutter={"1.5rem"}>
						{data.images.map((d, i) => (
							<img key={"img-" + i} style={{ width: "100%" }} src={basePath + "/contributions-media/" + data.pc_id + "/" + d} />
						))}
					</Masonry>
				</ResponsiveMasonry>
			</Col>
			<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
				<p className={classNames("mb-5")} style={{ whiteSpace: "pre-line" }}>{data.description.split("\n").join("\n")}</p>
			</Col>
			{data.video && (
				<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} className={classNames("mb-5")}>
					<h5>Video</h5>
					<p>{data.video}</p>
				</Col>
			)}
			<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
				<h5>Artist{data.authors.length > 1 ? "s" : ""} bio</h5>
			</Col>
			{data.authors.map((d, i) => (
				<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: (i % 3) + 1 }}>
					<Row key={"auth" + i} className={classNames("d-flex", "align-items-center", "mb-5")}>
						<Col sm={2}>
							{d.image && <img className={classNames("w-100")} src={basePath + "/contributions-media/" + data.pc_id + "/" + d.image} />}
						</Col>
						<Col sm={7}>
							<p className={classNames("mt-0", "mb-0", "fw-semibold")}>
								{d.name} {d.surname}{" "}
								{d.website && (
									<a className={classNames()} href={d.website}>
										{d.website}
									</a>
								)}
							</p>

							{d.bio && <p className={classNames("small", "mb-0")}>{d.bio}</p>}
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

///////////////////////////////////////////////////////////////////////////////

function getRandomItem(arr) {
	// get random index value
	const randomIndex = Math.floor(Math.random() * arr.length);

	// get random item
	const item = arr[randomIndex];

	return item;
}
