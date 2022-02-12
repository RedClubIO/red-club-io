import Link from "next/link";


import ui from '../../styles/UI.module.css'

	
export default function UILink({href, text, icon}) {
	return (
		<>
			<Link href={href}>
				<a className={ui.link}>{icon}{text}</a>
			</Link>
		</>
	)
}
		