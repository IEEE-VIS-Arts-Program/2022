import PageTemplate from "../components/PageTemplate/PageTemplate";
import classNames from "classnames";
import { getContributionsData } from "../lib/contributions";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Contributions({ allContributionsData }) {
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
			<div id="cotributions-list" className={classNames("stickyTitleSection")}>
				<h3 className={classNames("sticky-top")}>Artworks, Pictorials and Papers</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry gutter={"1.5rem"}>
					{allContributionsData.map((d) => (
						<div key={d.id}>
							<img style={{width:"100%"}} src={`http://via.placeholder.com/640x${getRandomItem([240, 360, 480, 640])}`} />
							<p>{d.type}</p>
							<p>{d.title}</p>
							<p>{d.authors.map((d) => `${d.name} ${d.surname}`).join(", ")}</p>
							<p>
								<Link href={"/contributions/" + d.id}>Read more</Link>
							</p>
						</div>
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
