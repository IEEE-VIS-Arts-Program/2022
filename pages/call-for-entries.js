import Link from "next/link";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import classNames from "classnames";

export default function Submission() {
	return (
		<PageTemplate metaTitle="Call for Entries">
			<h1 className={classNames("text-gradient", "page-title")}>Call for Entries</h1>
			<h3>The Theme</h3>
			<p>
				The theme for VISAP’22 is “mingling spaces”. For 10 years the VIS Arts
				Program, and before this the VIS Arts Show, have represented a mingling
				space, a space “to bring or mix together or with something else, usually
				without fundamental loss of identity” [Merriam-Webster]. VISAP is a
				mingling space where those who actively work at the intersection of
				visualization, the arts and design and those who appreciate and/or are
				inspired by the results of these works can meet, discuss, and exchange
				perspectives. However, across all these years, the meaning of “space” in
				the context of the conference has constantly changed and evolved and
				with it the form of mingling. VISAP as a mingling space has seen many
				different themes, disciplines, methodologies, techniques, formats,
				people, and locations, with the two most recent VISAPs that took place
				virtually, maybe representing the most drastic change to the ways in
				which works were presented and discussed.
			</p>
			<p>
				VISAP’22 will take place in a hybrid format, and we will therefore
				experiment with different forms of mingling, attempting to bridge and
				mix not only disciplines, methodologies and techniques but also the
				virtual and the physical, the immaterial and the material; people and
				artifacts online and offline, remote and on-site.
			</p>
			<p>
				In line with this experiment, we invite submissions that explore,
				re-interpret, speculate and reflect on the idea of mingling spaces. How
				have the ways in which we mingle changed in response to technological,
				social, political, and economic factors (e.g., digitization, the rise of
				social media, the pandemic, the climate crisis, the renaissance of
				nationalism and right-wing populism, etc…)? And how has this changed the
				concept of space? How has our behaviour, our communication, and the ways
				in which we read and experience each other changed in response to the
				digital and physical spaces in which we mingle? How does personal data
				and their representation facilitate, change, distort, feed off and/or
				inhibit the mingling of people, ideas, and spaces? And how can mingling
				spaces bridge physical, disciplinary, conceptual and ideological
				boundaries?
			</p>
			<h3>Submission Details</h3>
			<p className={classNames("mb-2")}>Submissions can either be made to:</p>
			<ol>
				<li>
					<strong>A paper track</strong>: Extended abstract with a 10 page
					limit, including figures and references
				</li>
				<li>
					<strong>A pictorial track (annotated portfolios)</strong>: 16 page
					limit, using the InDesign or Word template specified below.
				</li>
				<li>
					<strong>An exhibition track</strong>: Two-page description of the
					exhibit, accompanied by any relevant visuals and/or sound files
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
				.
			</p>
			<p>Go the <Link href="/submission">Submission Instructions</Link> for
				further details.</p>
			<p>
				Note: VISAP aims to foster discussions of the relationships between the
				design process and the final artifact. We encourage all artists and
				designers to showcase and describe the process of research creation when
				producing visualizations or data-driven art pieces.
			</p>
			<p>
				Accepted submissions to the paper and to the pictorial tracks will be
				presented during the IEEE VIS conference VISAP sessions. Accepted
				exhibits will be displayed during the opening reception, and throughout
				the conference in a dedicated exhibition space. Pictorials may be
				displayed in printed forms at the opening reception; and exhibits may be
				offered an opportunity to be presented during the IEEE VIS conference
				VISAP sessions.
			</p>
			<p>We look forward to your participation!</p>
			<p className={classNames("fst-italic", "text-gradient")} style={{fontWeight: 500}}>
				Uta Hinrichs and Charles Perin
				<br />
				VISAP’22 General Chairs
			</p>
		</PageTemplate>
	);
}
