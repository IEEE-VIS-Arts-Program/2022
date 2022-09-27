import { ContributionPageTemplate } from "../../components/PageTemplate";
import classNames from "classnames";
import styles from "../../styles/contributions.module.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { getIds, getSingleData } from "../../lib/contributions";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import { image as d3Image } from "d3";
import ExportedImage from "next-image-export-optimizer";

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
	const [images, setImages] = useState([]);
	const [authorsImages, setAuthorsImages] = useState([]);
	useLayoutEffect(() => {
		const arr = [];
		data.images.forEach((d) => {
			const imgSrc = basePath + "/images/contributions-media/" + data.pc_id + "/" + d;
			arr.push(d3Image(imgSrc));
		});
		Promise.all(arr).then((arr) => {
			const _images = [];
			arr.forEach((img) => {
				const { width, height, src } = img;
				_images.push({ width, height, src });
			});
			setImages(_images);
		});

		const arr2 = [];
		data.authors.forEach((d) => {
			const imgSrc = basePath + "/images/contributions-media/" + data.pc_id + "/" + d.image;
			arr2.push(d3Image(imgSrc));
		});
		Promise.all(arr2).then((arr2) => {
			const _authorsImages = [];
			arr2.forEach((img) => {
				const { width, height, src } = img;
				_authorsImages.push({ width, height, src });
			});
			setAuthorsImages(_authorsImages);
		});
	}, [data]);

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
				<ResponsiveMasonry columnsCountBreakPoints={masonryBreakpoints} className={classNames(styles.contributionGallery)}>
					<Masonry gutter={"1.5rem"}>
						{images.map((d, i) => (
							// <img key={"img-" + i} style={{ width: "100%" }} src={d.src} />
							<ExportedImage
								key={"img-" + i}
								src={basePath + "/images/contributions-media/" + data.pc_id + "/" + d.src.split("/").slice(-1)[0]}
								alt={"Image of " + data.title}
								layout="responsive"
								width={d.width}
								height={d.height}
								placeholder="blur"
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</Col>
			<Col sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
				<p className={classNames("mb-5")} style={{ whiteSpace: "pre-line" }}>
					{data.description.split("\n").join("\n")}
				</p>
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
			{data.authors.map((d, i) => (
				<Col key={"auth" + i} sm={{ span: 12, offset: 0 }} md={{ span: 10, offset: (i % 3) + 1 }}>
					<Row className={classNames("d-flex", "align-items-center", "mb-5")}>
						<Col sm={2}>
							{(d.image && authorsImages.length>0) && (
								// <img className={classNames("w-100")} src={basePath + "/images/contributions-media/" + data.pc_id + "/" + d.image} />
								<ExportedImage
									src={basePath + "/images/contributions-media/" + data.pc_id + "/" + authorsImages[i].src.split("/").slice(-1)[0]}
									alt={"Image of " + data.title}
									layout="responsive"
									width={authorsImages[i].width}
									height={authorsImages[i].height}
									placeholder="blur"
								/>
							)}
						</Col>
						<Col sm={7}>
							<p className={classNames("mt-0", "mb-0", "fw-semibold")}>
								{d.name} {d.surname}{" "}
								{d.website && (
									<a className={classNames()} href={d.website}>
										{d.website.replace("https://", "").replace("http://", "").replace("www.", "").replace(/[\/$]/, "")}
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
