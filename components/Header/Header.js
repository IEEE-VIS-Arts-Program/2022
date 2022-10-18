import styles from "./Header.module.scss";
import classNames from "classnames";
import Link from "next/link";
// import visapLogoLight from "../../images/logo-white.svg";
import visapLogo from "../../public/images/logo-visap.png";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import DropdownItemLink from "../DropdownItemLink";

import { useRouter } from "next/router";

export default function Header() {
	const { basePath } = useRouter();
	return (
		<>
			<Navbar
				bg="transparent"
				expand="lg"
				className={classNames(styles.headerBootstrap, "sticky-top")}
				collapseOnSelect={true}
			>
				<Container>
					<Navbar.Brand className="py-0" href={basePath + "/"}>
						<img
							className={classNames(styles.logo)}
							src={visapLogo.src}
							alt="VISAP22 logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Link href="/">
								<a className={classNames("nav-link", "reset-link")}>Home</a>
							</Link>
							<Link href="/contributions">
								<a className={classNames("nav-link", "reset-link")}>
									Contributions
								</a>
							</Link>
							<Link href="/#supporters">
								<a className={classNames("nav-link", "reset-link")}>
									Supporters
								</a>
							</Link>
							<Link href="/programme">
								<a className={classNames("nav-link", "reset-link")}>
									Programme
								</a>
							</Link>			
							<Link href="/organizers">
								<a className={classNames("nav-link", "reset-link")}>
									Organizers
								</a>
							</Link>
							<Link href="/call-for-entries">
								<a className={classNames("nav-link", "reset-link")}>
									Call for Entries
								</a>
							</Link>
							{/* <NavDropdown title="Submission" id="collasible-nav-dropdown">
								<NavDropdown.Item
									href="/submission#important-dates"
									as={DropdownItemLink}
									className="dropdown-item"
								>
									Important Dates
								</NavDropdown.Item>
								<NavDropdown.Item
									href="/submission#paper-submission"
									as={DropdownItemLink}
									className="dropdown-item"
								>
									Paper Submission
								</NavDropdown.Item>
								<NavDropdown.Item
									href="/submission#pictorial-submission"
									as={DropdownItemLink}
									className="dropdown-item"
								>
									Pictorial Submission
								</NavDropdown.Item>
								<NavDropdown.Item
									href="/submission#exhibition-submission"
									as={DropdownItemLink}
									className="dropdown-item"
								>
									Artwork Submission
								</NavDropdown.Item>
								<NavDropdown.Item
									href="/submission#submission-procedure"
									as={DropdownItemLink}
									className="dropdown-item"
								>
									Submission Procedure
								</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
