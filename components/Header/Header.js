import styles from "./Header.module.scss";
import classNames from "classnames";
import Link from "next/link";
import visapLogoLight from "../../images/logo-white.svg";

import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
	return (
		<>
			<header className={classNames("py-3", styles.header)}>
				<Link href="/">
					<a className={classNames(styles.navLink, styles.pos3)}>Home</a>
				</Link>
				<Link href="/call-for-entries">
					<a className={classNames(styles.navLink, styles.pos1)}>
						Call for Entries
					</a>
				</Link>
				<Link href="/submission">
					<a className={classNames(styles.navLink, styles.pos2)}>Submission</a>
				</Link>
				<Link href="/organizers">
					<a className={classNames(styles.navLink, styles.pos4)}>Organizers</a>
				</Link>
			</header>
			<Navbar
				bg="light"
				expand="lg"
				className={classNames(styles.headerMobile, "sticky-top")}
			>
				<Container fluid>
					<Navbar.Brand className="py-0" href="/">
						<img
							className={classNames(styles.logo)}
							src={visapLogoLight.src}
							alt="VISAP22 logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Link href="/">
								<a className={classNames("nav-link", "reset-link")}>Home</a>
							</Link>
							<Link href="/call-for-entries">
								<a className={classNames("nav-link", "reset-link")}>
									Call for Entries
								</a>
							</Link>
							<Link href="/submission">
								<a className={classNames("nav-link", "reset-link")}>
									Submission
								</a>
							</Link>
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
