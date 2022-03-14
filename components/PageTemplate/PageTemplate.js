import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./PageTemplate.module.scss";

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
				{children}
				<Footer />
			</div>
		</>
	);
}

PageTemplate.defaultProps = {
	metaTitle: "VISAP22",
	metaContent: "The IEEE VIS Art Program forum.",
};
