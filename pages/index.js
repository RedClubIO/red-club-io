import Head from 'next/head'

import Link from "next/link";

import sMain from '../styles/Main.module.css'
import sHome from '../styles/Home.module.css'

import UILink from '../components/UI/UILink';


import { ABOUT, CHARITY, FAQ, PRIVACY, PROJECTS, MINT, REDCLUB, ROADMAP, TEAM, TERMS } from '../components/data/links';


import {motion} from 'framer-motion';

const blockAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2}
    }),
}


export default function Home() {
	return (
		<>
		<Head><title>Home</title></Head>
		
		<motion.section
            initial="hidden"
            whileInView="visible"
            id="home"
            className={`${sMain.section} ${sHome.section}`}
        >
			<motion.div
                custom={1}
                variants={blockAnimation}
                className={sMain.container}
            >
				<div className={sMain.container_text}>
					<h1><b className={sMain.red}>Red</b>Club</h1>
				</div>
				<div className={sMain.container_links}>
				<UILink href={ABOUT.href} icon={ABOUT.icon} text={ABOUT.text}  />
                    <UILink href={PROJECTS.href} icon={PROJECTS.icon} text={PROJECTS.text}  />
                    <UILink href={TEAM.href} icon={TEAM.icon} text={TEAM.text}  />
                    <UILink href={CHARITY.href} icon={CHARITY.icon} text={CHARITY.text}  />
                    <UILink href={FAQ.href} icon={FAQ.icon} text={FAQ.text}  />
                    <UILink href={ROADMAP.href} icon={ROADMAP.icon} text={ROADMAP.text}  />
                    {/* <UILink href={MINT.href} icon={MINT.icon} text={MINT.text}  /> */}
                    {/* <UILink href={REDCLUB.href} icon={REDCLUB.icon} text={REDCLUB.text}  /> */}
                    {/* <UILink href={TERMS.href} icon={TERMS.icon} text={TERMS.text}  />
                    <UILink href={PRIVACY.href} icon={PRIVACY.icon} text={PRIVACY.text}  /> */}
				</div>
			</motion.div>
		</motion.section>
		</>
	)
}
	