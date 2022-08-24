import PageTemplate from "../../components/PageTemplate/PageTemplate";
import classNames from "classnames";
import { getIds, getSingleData } from "../../lib/contributions";

export default function Contribution({ data }) {
	return (
		<PageTemplate metaTitle="A contribution">
			<p>{data.title}</p>
			<p>{data.authors.map((d) => `${d.name} ${d.surname}`).join(", ")}</p>
			<p>{data.keywords}</p>
			<p>{data.description}</p>
		</PageTemplate>
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
