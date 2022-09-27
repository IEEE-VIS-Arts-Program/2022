import PageTemplate from "../components/PageTemplate/PageTemplate";
import classNames from "classnames";
import { getContributionsData } from "../lib/contributions";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "../styles/contributions.module.scss";
import { useRouter } from "next/router";

export default function Contributions({ allContributionsData }) {
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
		<PageTemplate metaTitle="Selected Contributions">
			<h1 className={classNames("text-gradient", "page-title")}>Selected Contributions</h1>
			<div id="contributions-list" className={classNames("XstickyTitleSection")}>
				<h3 className={classNames("Xsticky-top")}>Artworks, Pictorials and Papers</h3>
				{/* <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p> */}
			</div>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry gutter={"1.5rem"}>
					{allContributionsData.map((d) => (
						<Link href={"/contributions/" + d.id}>
							<div
								key={d.id}
								dataName={d.id}
								className={classNames(styles.contribution)}
								style={{
									borderColor: `var(${d.type === "artwork" ? "--pink" : "--azure"})`,
									boxShadow: `7px 7px 2px 0px var(${d.type === "artwork" ? "--pink" : "--azure"})`,
								}}
							>
								<img className={classNames("w-100")} src={basePath + "/contributions-media/" + d.pc_id + "/" + d.images[0]} />
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
		</PageTemplate>
	);
}

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
