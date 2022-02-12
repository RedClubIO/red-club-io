import Head from 'next/head'

import Link from "next/link";

import sMain from '../styles/Main.module.css'

import { FcConferenceCall, FcLike, FcAdvertising, FcInfo, FcWorkflow, FcStackOfPhotos, FcCursor, FcGlobe,
	FcReading, FcPrivacy } from 'react-icons/fc';


export default function Error() {
	
	return (
		<>
			<Head><title>Error 404</title></Head>

			<section id="error" className={`${sMain.section} `}>
				<div className={sMain.container}>
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Error</b>404</h1>
					</div>
					<div className={sMain.container_links}>
						<Link href="/about">
							<a><FcAdvertising />About</a>
						</Link>
						<Link href="/projects">
							<a><FcStackOfPhotos />Projects</a>
						</Link>
						<Link href="/">
							<a><FcGlobe />RedClub</a>
						</Link>
						<Link href="/team">
							<a><FcConferenceCall />Team</a>
						</Link>
						<Link href="/faq">
							<a><FcInfo />FAQ</a>
						</Link>
					</div>
				</div>
			</section>
		</>
		);
	}