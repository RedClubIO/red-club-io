import Head from 'next/head'

import sMain from '../../styles/Main.module.css'
import sRoadmap from '../../styles/Roadmap.module.css'

import {motion} from 'framer-motion';

const blockAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2}
    }),
}

export default function Roadmap() {
	return (
		<>
			<Head><title>Roadmap</title></Head>
			<motion.section
                initial="hidden"
                whileInView="visible"
                id="roadmap" className={`${sMain.section} ${sRoadmap.section}`}
            >
				<motion.div
                    custom={1}
                    variants={blockAnimation}
                    className={sMain.container}
                >
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Road</b>map</h1>
					</div>
					<div className={sMain.container_links}>
						
					</div>
				</motion.div>
			</motion.section>
		</>
		)
	}
	