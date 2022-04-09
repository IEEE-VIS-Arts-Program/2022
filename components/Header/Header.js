import styles from "./Header.module.scss";
import classNames from "classnames";
import Link from "next/link";
import visapLogoLight from "../../images/logo-white.svg";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import DropdownItemLink from "../DropdownItemLink";

export default function Header() {
	return (
		<>
			<Navbar
				bg="light"
				expand="lg"
				className={classNames(styles.headerBootstrap, "sticky-top")}
				collapseOnSelect={true}
			>
				<Container>
					<Navbar.Brand className="py-0" href="/">
						<img
							className={classNames(styles.logo)}
							src={visapLogoLight.src}
							alt="VISAP22 logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Link href="/">
								<a className={classNames("nav-link", "reset-link")}>Home</a>
							</Link>
							<Link href="/call-for-entries">
								<a className={classNames("nav-link", "reset-link")}>
									Call for Entries
								</a>
							</Link>
							<NavDropdown title="Submission" id="collasible-nav-dropdown">
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
							</NavDropdown>
							<Link href="/organizers">
								<a className={classNames("nav-link", "reset-link")}>
									Organizers
								</a>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
