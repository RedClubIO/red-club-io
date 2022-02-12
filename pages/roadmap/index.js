import Head from 'next/head'

import sMain from '../../styles/Main.module.css'
import sRoadmap from '../../styles/Roadmap.module.css'


export default function Roadmap() {
	return (
		<>
			<Head><title>Roadmap</title></Head>
			<section id="roadmap" className={`${sMain.section} ${sRoadmap.section}`}>
				<div className={sMain.container}>
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Road</b>map</h1>
					</div>
					<div className={sMain.container_links}>
						
					</div>
				</div>
			</section>
		</>
		)
	}
	