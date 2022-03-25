import Link from "next/link";
import styles from "./DropdownItemLink.module.scss";

export default function DropdownItemLink({ href, children }) {
	return (
		<Link href={href}>
			<a className="dropdown-item">{children}</a>
		</Link>
	);
}
