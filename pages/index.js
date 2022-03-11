import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import InteractiveLogo from "../components/InteractiveLogo";
import Footer from "../components/Footer";
import classNames from "classnames";

export default function Home() {
	return (
		<>
			<Head>
				<title>VISAP22</title>
				<meta name="description" content="The IEEE VIS Art Program forum." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container fluid>
				<Row>
					<Col>
						<InteractiveLogo />
					</Col>
				</Row>
			</Container>
			<Container className={classNames("mb-3")}>
				<Row>
					<Col md={8}>
						<h1>Call for entries</h1>
						<h2>The program</h2>
						<p>
							The VIS Arts Program (VISAP) is a mini-conference and exhibition
							where visualization researchers, designers, and (media) artists
							come together to showcase and discuss works at the intersection of
							data visualization, art and design. It is the biggest associated
							event in the{" "}
							<a href="http://ieeevis.org/year/2022/welcome">
								IEEE VIS conference
							</a>
							, and its main goal is to foster new thinking, discussion, and
							collaboration across and between fields of research and practice.
						</p>
						<p>
							VISAP welcomes a wide range of submissions, including interactive
							artworks, design projects, novel visualization tools and
							applications, art-science or artist-in-lab projects, critical
							interpretations and evaluations of data visualizations, and
							philosophical meditations on the intersections between art and
							research. These can either be submitted to a paper track, or to an
							exhibition track (see details below).
						</p>
						<p>
							VISAP will take place in hybrid form this year. Accepted works to
							the paper and exhibition track can be presented either virtually
							oron in-person.
						</p>
						<p>
							Accepted works will be published on the official VISAP website
							and, the exhibits in a dedicated exhibition catalogue. Papers and
							pictorials will be indexed in the IEEE Xplore digital library.
						</p>
						<h2>The theme</h2>
						<p>
							The theme for VISAP’22 is “mingling spaces”. The theme for
							VISAP’22 is “mingling spaces”. Since 10 years the VIS Arts
							Program, and before this the VIS Arts Show represent a mingling
							space, a space “to bring or mix together or with something else,
							usually without fundamental loss of identity” [Merriam Webster].
							VISAP is a space where those who actively work at the intersection
							of visualization, the arts and design and those who appreciate
							and/or are inspired by the results of these works can meet,
							discuss, and exchange perspectives. However, across all these
							years, the meaning of “space” in the context of the conference has
							constantly changed and evolved and with it the form of mingling.
							VISAP as a mingling space has seen many different locations,
							themes, people and formats, with the two most recent VISAPs that
							took place virtually maybe representing the most drastic change to
							the way in which works were presented and discussed.
						</p>
						<p>
							VISAP’22 will be an experiment in that it will not only be a
							mingling space to appreciate and discuss artistic and design
							perspectives on visualization, but - leveraging the hybrid format
							of the program this year - it will be an attempt to allow virtual
							and physical spaces to mingle; to bridge and link the virtual and
							the physical, the immaterial and the material; people and
							artifacts online and offline, remote and on-site.{" "}
						</p>
						<p>
							As such, we invite submissions that engage with and re-interprete
							the theme of “mingling spaces” in different ways.{" "}
						</p>
						<ul>
							<li>
								How have (social) spaces and the ways in which we mingle changed
								in response to technological, political, and economic factors
								(e.g., digitization, the rise of social media, the pandemic, the
								climate crisis, the renaissance of nationalism and right-wing
								populism, etc…)?
							</li>
							<li>
								How is our behaviour, our communication and the ways in which we
								read and experience each other changed in response to the
								(digital and physical) spaces in which we interact?
							</li>
							<li>
								How does (personal) data and their representation facilitate,
								change, distort, feeds off and or inhibit the mingling of people
								and spaces?
							</li>
							<li>
								How can our interactions - our mingling - bridge physical,
								conceptual and ideological boundaries?
							</li>
						</ul>
						<h2>Submission details</h2>
						<p>Submissions can either be made to:</p>
						<ol>
							<li>
								A paper track: Extended abstract with an 10 page limit,
								including figures and references;
							</li>
							<li>
								A pictorial track (annotated portfolios): 16 page limit, using
								the InDesign or Word template specified below.
							</li>
							<li>
								An exhibition track: Two-page description of the exhibit,
								accompanied by any relevant visuals and/or sound files.
							</li>
						</ol>
						<p>
							All submissions are due by June 2, 2022{" "}
							<a href="https://www.worldtimeserver.com/time-zones/aoe/#:~:text=The%20current%20time%20and%20date%20right%20now&text=Anywhere%20on%20Earth%20or%20AoE,offset%20of%20%2D%2012%3A00">
								AOE
							</a>
							, using the{" "}
							<a href="https://new.precisionconference.com/vgtc">
								Precision Conference System (PCS)
							</a>
							. Read the{" "}
							<a href="https://visap.net/submission.html">
								Submission Instructions
							</a>{" "}
							for details.
						</p>
						<p>
							Note: VISAP aims to foster discussions of the relationships
							between the design process and the final artifact. We encourage
							all artists and designers to showcase and describe the process of
							research creation when producing visualizations or data-driven art
							pieces.
						</p>
						<p>
							Accepted submissions to the paper and to the pictorial tracks will
							be presented during the IEEE VIS conference VISAP sessions.
							Accepted exhibits will be displayed during the opening reception,
							and throughout the conference in a dedicated exhibition space.
							Pictorials may be displayed in printed forms at the opening
							reception; and exhibits may be offered an opportunity to be
							presented during the IEEE VIS conference VISAP sessions.
						</p>
						<p>
							We look forward to your participation!
							<br />
							Uta Hinrichs and Charles Perin
							<br />
							VISAP’22 General Chairs
						</p>
						{/* <h2>Pictorials instructions</h2>
						<p>
							We invite artists and designers to submit pictorials and annotated
							portfolios related to the theme Mingling Spaces.
						</p> */}
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
