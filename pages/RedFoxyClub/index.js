import Head from 'next/head'
import Image from "next/image"

import UILink from '../../components/UI/UILink';

import sMain from '../../styles/Main.module.css'
import sRedFoxyClub from '../../styles/RedFoxyClub.module.css'

import { ABOUT, CHARITY, FAQ, PRIVACY, PROJECTS, MINT, REDCLUB, ROADMAP, TEAM, TERMS } from '../../components/data/links';

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


export default function RedFoxyClub() {
	return (
		<>
		<Head><title>RedFoxyClub</title></Head>

        <motion.section
            initial="hidden"
            whileInView="visible"
            id="redfoxyclub" className={`${sMain.section} ${sRedFoxyClub.section}`}
        >

            <motion.div
                custom={1}
                variants={blockAnimation}
                className={sMain.container}
            >
				<div className={sMain.container_text}>
					<h1><b className={sMain.red}>Red</b><b className={sMain.orange}>Foxy</b>Club</h1>
				</div>
                <div className={`${sMain.block} ${sRedFoxyClub.block}`}>
                        <p>Collection of 3,333 Red Foxy NFTs—unique digital collectibles living on the Ethereum blockchain.
						Your Bored Foxy doubles as your Club membership card, and grants access to members-only benefits.
						Future areas and perks can be unlocked by the community through roadmap activation.</p>
                </div>
                <div className={sMain.block}>
                    <Image
						src="/RedFoxyClub/club.png"
						width="1919" height="720"
						alt="Club"
						placeholder="blur"
						blurDataURL="/RedFoxyClub/club.png"
					/>
                </div>
				<div className={sMain.container_links}>
				<UILink href={ABOUT.href} icon={ABOUT.icon} text={ABOUT.text}  />
                    <UILink href={TEAM.href} icon={TEAM.icon} text={TEAM.text}  />
                    <UILink href={MINT.href} icon={MINT.icon} text={MINT.text}  />
                    <UILink href={REDCLUB.href} icon={REDCLUB.icon} text={REDCLUB.text}  />
                    <UILink href={FAQ.href} icon={FAQ.icon} text={FAQ.text}  />
                    <UILink href={ROADMAP.href} icon={ROADMAP.icon} text={ROADMAP.text}  />
				</div>
			</motion.div>
        </motion.section>	
	</>
	)
}
