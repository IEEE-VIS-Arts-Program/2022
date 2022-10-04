import PageTemplate from "../components/PageTemplate/PageTemplate";
import Dates from "../components/Dates";
import classNames from "classnames";
import { useEffect, useState } from "react";
import Separator from "../components/Separator/Separator";
import styles from "../styles/Submission.module.scss";

export default function Submission() {
	const [sections, setSections] = useState();
	useEffect(() => {
		let _sections = Array.from(document.querySelectorAll("h3")).filter((d) =>
			d.hasAttribute("id")
		);
		// console.log(_sections)
		setSections(
			_sections.map((d) => ({
				innerText: d.innerText,
				id: d.attributes.id.nodeValue,
			}))
		);
	}, []);
	return (
		<PageTemplate metaTitle="Submission" submenu={sections}>
			<h1 className={classNames("Xtext-gradient", "page-title")}>Submission</h1>
			<div id="important-dates" className={classNames(styles.XstickyTitleSection)}>
				<h3 className={classNames("Xsticky-top")}>Important Dates</h3>
				<Dates />
			</div>
			<div id="paper-submission" className={classNames(styles.XstickyTitleSection)}>
				<h3 className={classNames("Xsticky-top")}>
					Paper Submission
				</h3>
				<p>
					We invite researchers, scholars, and creative practitioners to submit
					papers related to the theme <i>Mingling Spaces</i>. We encourage
					submissions such as technical descriptions of creative visualization
					projects, philosophical meditations on art-science methodology,
					expanded descriptions of specific (media) art projects, and critical
					interpretations of visualization approaches and practices. We are open
					to any submission that relates in some way to art or design and that
					would be of interest to the communities participating in IEEE VIS
					2022.
				</p>
				<h6>Example topics</h6>
				<p className={classNames("mb-2")}>
					Topics may include, but are not limited to the following:
				</p>
				<ul>
					<li>Critical visualization</li>
					<li>
						The influence of visualization techniques on art or design practices
					</li>
					<li>
						The influence of contemporary art and design practices on
						visualization techniques
					</li>
					<li>Exploration of the history of visualization</li>
					<li>Temporal dynamics and affective motion</li>
					<li>Visual storytelling</li>
					<li>Art and information</li>
					<li>Software studies</li>
					<li>Data visualization art</li>
					<li>Database aesthetics</li>
					<li>Creative visualization techniques</li>
					<li>Experimental interaction techniques</li>
					<li>Design and information aesthetics</li>
					<li>Infographics and art</li>
					<li>Cybernetic art and visualization</li>
					<li>Telematic embraces and visualization</li>
					<li>Aesthetics of experiment</li>
					<li>Aesthetics of interpretation</li>
				</ul>
				<h6>Paper Format</h6>
				<p>
					Authors are required to use the{" "}
					<a href="https://tc.computer.org/vgtc/publications/conference/">
						IEEE Conference format
					</a>{" "}
					for paper submissions.{" "}
					<a href="https://www.cspaul.com/vgtc/vgtc_conference_word.zip">
						Word
					</a>{" "}
					and{" "}
					<a href="https://www.cspaul.com/vgtc/vgtc_conference_latex.zip">
						LaTeX
					</a>{" "}
					templates are available. It is mandatory to use this format. However,
					including keywords and index terms is optional.
				</p>
				<p>
					Paper submissions must not exceed 10 pages—including all figures and
					references.
				</p>
				<p>
					Submitting supplementary material and/or links to external material is
					encouraged to help reviewers evaluate the submission.
				</p>
				<h6>Acceptance</h6>
				<p>
					Accepted authors will present their work in one of the two VISAP
					Papers sessions - virtually or in-person - during the conference. All
					accepted papers will be published online in the IEEE VIS 2022 Arts
					Program proceedings, and indexed in the IEEE Xplore digital library.
				</p>
				<h6>Previous VISAP Papers</h6>
				<p>
					Please see the online proceedings from previous years (
					<a href="https://ieeexplore.ieee.org/xpl/conhome/9622893/proceeding">
						2021
					</a>
					,{" "}
					<a href="https://ieeexplore.ieee.org/xpl/conhome/9307976/proceeding">
						2020
					</a>
					, <a href="https://visap.net/2019/program">2019</a>,{" "}
					<a href="http://visap.net/2018/program">2018</a>,{" "}
					<a href="http://visap.uic.edu/2017/papers.html">2017</a>,{" "}
					<a href="http://visap.uic.edu/2016/papers.html">2016</a>,{" "}
					<a href="http://visap.uic.edu/2015/papers.html">2015</a>,{" "}
					<a href="http://visap.uic.edu/2014/program.html#papers">2014</a>,{" "}
					<a href="http://visap.uic.edu/2013/#program">2013</a>) for examples of
					accepted submissions. (Selected VISAP papers have also been featured
					in IEEE Computer Graphics and Applications and Leonardo).
				</p>
			</div>
			<div id="pictorial-submission" className={classNames(styles.XstickyTitleSection)}>
				<h3 className={classNames("Xsticky-top")}>
					Pictorial Submission
				</h3>
				<p>
					We invite artists and designers to submit pictorials and annotated
					portfolios related to the theme <i>Mingling Spaces</i>.
				</p>
				<p>
					Artists, designers, and researchers all make creative choices based on
					practical knowledge, generally acquired through experience.
					Unfortunately, this knowledge is seldom shared in publications. VISAP
					Pictorials aim to foster discussions around this reflection-in-action
					when creating visualizations or data-driven art pieces.
				</p>
				<p>
					These submissions reflect either on shared concepts among a selection
					of visualizations, or on the design process of a single work. Whether
					in the case of a single artifact, or, in the case of a series of
					artifacts, the designer is in a unique position to provide valuable
					insights into the design intentions, the design space explorations,
					and the design process (Löwgren 2013). Through pictorials and
					annotated portfolios, we invite submissions that communicate the
					visualization practices in rich, heavily visual ways.
				</p>
				<h6>What to consider</h6>
				<p className={classNames("mb-2")}>
					Elements that reviewers will look for include:
				</p>
				<ul>
					<li>The appropriateness and richness of the visual style</li>
					<li>The quality of presentation</li>
					<li>The production value of images, photos and diagrams</li>
				</ul>
				<h6>Example Topics</h6>
				<p className={classNames("mb-2")}>
					Projects could involve any of the following:
				</p>
				<ul>
					<li>Visualization that emphasizes aesthetics</li>
					<li>Visualization that encourages creative interaction</li>
					<li>Speculative visualizations</li>
					<li>Visualization as tactical media</li>
					<li>New data paradigms</li>
					<li>Live coding and streaming data</li>
					<li>Complex systems</li>
					<li>Exploratory data semantics</li>
					<li>3D visualization, VR environments, and immersive analytics</li>
					<li>Computational photography</li>
					<li>Ambient information displays</li>
					<li>Visualization as storytelling</li>
					<li>Design studies</li>
					<li>Data sonification</li>
					<li>Conversation theory</li>
					<li>Digital humanities visualization</li>
				</ul>
				<h6>What we mean by Pictorial and Annotated Portfolio</h6>
				<p>
					A pictorial is a visual description and reflection of the design
					process of a single visualization project. It is intended to capture
					the situated and rich nature of design. See{" "}
					<a href="https://dis.acm.org/2020/pictorials.html">DIS Pictorials</a>{" "}
					for inspiration.
				</p>
				<p>
					An annotated portfolio is a collection of design works with brief
					textual annotations. It has been proposed by Gaver and Bowers (2012)
					as a “way to communicate design research”. The systematic selection
					and annotation of the artifacts are part of the contribution.
					Submitters are encouraged to highlight important features, discuss how
					ideas were developed, and reflect on recurring topics through their
					series of works.
				</p>
				<h6>Format (pictorials)</h6>
				<p>
					Artists and designers are required to use the VISAP Pictorials format
					for pictorial and annotated portfolio submissions.{" "}
					<a href="/VISAP_pictorial_Indd.zip">
						InDesign
					</a>{" "}
					and{" "}
					<a href="/VISAP_pictorial_Word.zip">
						Word
					</a>{" "}
					templates are available. It is mandatory to use this format.
				</p>
				<p>
					Pictorials and annotated portfolios must not exceed 16 pages. We
					encourage submitters to use the space in the most creative and visual
					way.
				</p>
				<p>
					Submitting supplementary material and/or links to external material is
					encouraged to help reviewers evaluate the submission.
				</p>
				<h6>Previous accepted work</h6>
				<p>
					Please see the five pictorials (
					<a href="http://visap.net/2018/media/Cruz-VISAP18-AP.pdf">1</a>,{" "}
					<a href="http://visap.net/2018/media/Bihanic-VISAP18-AP.pdf">2</a>,{" "}
					<a href="http://visap.net/2018/media/Perin-VISAP18-AP.pdf">3</a>,{" "}
					<a href="http://visap.net/2018/media/Glissmann-VISAP18-AP.pdf">4</a>,{" "}
					<a href="http://visap.net/2018/media/Hunter-VISAP18-AP.pdf">5</a>)
					from the inaugural edition of this format in the{" "}
					<a href="http://visap.net/2018/program">2018 program</a>, the three
					pictorials (
					<a href="https://visap.net/media/Offenhuber-VISAP19.pdf">1</a>,{" "}
					<a href="https://visap.net/media/Richardson-VISAP19.pdf">2</a>,{" "}
					<a href="https://visap.net/media/Samsel-VISAP19.pdf">3</a>) in the{" "}
					<a href="https://visap.net/2019/index.html">2019 program</a>, the two
					pictorials (
					<a href="https://visap.net/media/vis20m-sub1033-cam-i7.pdf">1</a> and{" "}
					<a href="https://visap.net/media/vis20m-sub1047-cam-i7.pdf">2</a>) in
					the <a href="https://visap.net/2020/program.html">2020 program</a>,
					and the five pictorials (
					<a href="https://ieeexplore.ieee.org/document/9623013">1</a>,{" "}
					<a href="https://ieeexplore.ieee.org/document/9622972">2</a>,{" "}
					<a href="https://ieeexplore.ieee.org/document/9622946">3</a>,{" "}
					<a href="https://ieeexplore.ieee.org/document/9622987">4</a>,{" "}
					<a href="https://ieeexplore.ieee.org/document/9623000">5</a>) in the{" "}
					<a href="https://visap.net/2021/program.html">2021 program</a>.
				</p>
				<h6>Acceptance</h6>
				<p>
					All accepted Pictorials will be published online in the IEEE VIS 2022
					Arts Program proceedings, and indexed in the IEEE Xplore digital
					library. Pictorials will be part of the VISAP’22 exhibition as printed
					booklets and showcased in the VISAP’22 catalog, which will be
					available both online and in print. Selected submissions will be
					invited to present their work - virtual or in-person - in one of the
					VISAP Papers sessions during the conference.
				</p>
			</div>
			<div id="exhibition-submission" className={classNames(styles.XstickyTitleSection)}>
				<h3 className={classNames("Xsticky-top")}>
					Artwork Submission
				</h3>
				<p>
					We invite artists and designers to submit data-driven artworks related
					to the theme <i>Mingling Spaces</i>. We welcome submissions in any
					medium, e.g., interactive projections, multimedia sculptures, mobile
					devices, illustrations, physicalizations, video game art, digital
					prints, screen-based art, fixed audio-visual pieces, etc.
				</p>
				<h6>What to include in the proposal</h6>
				<p className={classNames("mb-2")}>
					While the proposal is free-form, the following information must be
					included (consider structuring your proposal based on these headings):
				</p>
				<ol>
					<li>
						<strong>General Information</strong>: Title of the work, Year,
						Authors (and roles), Medium and Dimensions of the work
					</li>
					<li>
						<strong>Description</strong>: Description of the work and any
						interactive elements. Explain how your work relates to this year’s
						theme and how it links to information visualization, scientific
						visualization, and/or visual analytics. Discuss the reception of
						your work at previous exhibitions (if it has been exhibited before)
					</li>
					<li>
						<strong>Technical Requirements</strong>: Given that VISAP’ 22 is
						taking place in a hybrid format, describe how the work will be
						presented for online viewing and/or in-person. Provide technical
						details of the project. For instance, can your exhibit be viewable
						online? Does it require the audience to interact with it live? Are
						there any time of day requirements? Does it require any specific
						space or technical setup (e.g. VR gadgets or audiovisual equipment)?
						Consider how your artwork could be integrated in both a physical and
						virtual art exhibition
					</li>
					<li>
						<strong>Supporting Material</strong>: Provide links to
						high-resolution images, audio, webpages and/or videos that will help
						give the reviewers a clear sense of your work
					</li>
				</ol>
				<h6>Example topics</h6>
				<p className={classNames("mb-2")}>
					Artworks could involve any of the following:
				</p>
				<ul>
					<li>
						Visualization that emphasizes visual and performative aesthetics
					</li>
					<li>
						Visualization that encourages creative and/or collaborative
						interactions
					</li>
					<li>Speculative visualizations</li>
					<li>Visualization as tactical media</li>
					<li>New data paradigms</li>
					<li>Live coding and streaming data</li>
					<li>Complex systems</li>
					<li>Exploratory data semantics</li>
					<li>
						3D visualization, VR/AR/XR environments, and immersive analytics
					</li>
					<li>Computational photography</li>
					<li>Ambient information displays</li>
					<li>Visualization as storytelling</li>
					<li>Design studies</li>
					<li>Data sonification</li>
					<li>Conversation theory</li>
					<li>Digital humanities visualization</li>
					<li>Physical visualization and sculptural design</li>
				</ul>
				<h6>Format (exhibition)</h6>
				<p>
					Artists and designers are required to submit a 2 page .pdf file
					describing the work they wish to exhibit. No specific format is
					imposed.
				</p>
				<p>
					Submitting additional images, videos, or audio files as supplementary
					material is strongly encouraged to help reviewers evaluate the
					submission.
				</p>
				<h6>Previous accepted work</h6>
				<p>
					Please see the{" "}
					<a href="https://visap.net/2021/media/VISAP21-Catalogue.pdf">
						2021 catalog
					</a>{" "}
					(designed by Bon Adriel Aseniero), the{" "}
					<a href="https://visap.net/2020/media/IEEE_VISAP_20_Catalog_Final.pdf">
						2020 catalog
					</a>{" "}
					(designed by Christy Cheung), the{" "}
					<a href="https://visap.net/2019/media/VISAP19-Catalogue.pdf">
						2019 catalog
					</a>{" "}
					(designed by Damla Çay),{" "}
					<a href="http://visap.net/2018/media/VISAP18-Catalogue.pdf">
						2018 catalog
					</a>{" "}
					(designed by Density Design), the{" "}
					<a href="http://visap.uic.edu/2017/materials/ExhibitionCatalog-Sustain&Decay.pdf">
						2017 catalog
					</a>{" "}
					(designed by Yoon Chung Han), the{" "}
					<a href="http://visap.uic.edu/2016/materials/VISAP2016_ExhibitionCatalog_Metamorphoses.pdf">
						2016 catalog
					</a>{" "}
					(designed by Jeremy Boy), the{" "}
					<a href="http://visap.uic.edu/2015/DataImprovisations_Catalog.pdf">
						2015 catalog
					</a>{" "}
					(designed by Jack Henrie Fisher), the{" "}
					<a href="http://visap.uic.edu/2014/art/VISAP2014_ArtShowCatalog.pdf">
						2014 catalog
					</a>
					, or the{" "}
					<a href="http://visap.uic.edu/2013/VISAP_ArtShow_Catalog_2013.pdf">
						2013 catalog
					</a>{" "}
					(both designed by Lauren Thorson) to get a sense of the range of
					artworks that have been accepted previously. Please feel welcome to
					contact the chairs if you have questions about whether or not your
					work is an appropriate submission to VISAP.
				</p>
				<h6>Acceptance</h6>
				<p>
					All accepted work will be included in the online proceedings of VISAP
					on the visap.net website, as well as in a catalog that will be shared
					on the visap website. In addition to accepting installations that may
					be featured on the in-person or online exhibition, some artworks may
					be selected for artist talks during the week of the IEEE VIS
					conference. Performance submissions may also be scheduled for specific
					times during the exhibition. Artists will work with the VISAP
					organizers on details for showcasing their artworks in the online
					exhibition. Artists and authors are strongly encouraged to participate
					in the VISAP program throughout the week.
				</p>
				<p>
					No artist fees or travel costs are provided. There are some
					complimentary registrations available for selected artists. Priority
					will be given to exhibiting artists who are independent artists and
					not affiliated with institutions.
				</p>
				<p>
					The VISAP’22 exhibition chairs will contact the exhibitors upon
					acceptance. All accepted artworks will be documented in the IEEE
					VISAP’ 22 exhibition catalog, which will be available online.
				</p>
			</div>
			<div id="submission-procedure" className={classNames(styles.XstickyTitleSection)}>
				<h3 className={classNames("Xsticky-top")}>
					Submission Procedure (for all tracks)
				</h3>
				<p className={classNames("mb-2")}>
					All submissions must be made using the IEEE VGTC Electronic Conference
					System (on PCS). After creating an account or signing in, submitters
					will find the VISAP’22 Papers and Exhibition submissions by:
				</p>
				<ol>
					<li>Clicking on the “Submissions” tab</li>
					<li>Selecting the VIS 2022 conference, and</li>
					<li>Selecting “VIS 2022 VISAP”, and finally clicking on “Go”</li>
				</ol>
				<p>The submission system opens in April.</p>
				<p>
					VISAP uses a single-blind review process: submitted material is not
					required to be anonymized.
				</p>
				<p>
					At least one author per accepted paper and pictorial is required to
					register to the IEEE VIS conference to present the work (either
					virtually or in-person). Submitters of accepted exhibits are also
					strongly encouraged to attend the conference to set up their work for
					the opening reception, and to participate in the program throughout
					the week (again, either virtually or in-person).
					<br />
					No artist fee is provided. There are some complimentary day
					registrations available for selected artists. Priority will be given
					to exhibiting artists. We invite students to apply to the IEEE VIS
					student volunteer program to help cover registration fees. We also
					invite authors and artists who demonstrate financial need to apply for
					the IEEE VIS Inclusivity & Diversity Scholarship.
				</p>
			</div>
		</PageTemplate>
	);
}
