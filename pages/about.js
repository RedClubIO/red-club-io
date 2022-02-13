import Head from 'next/head'

import Link from "next/link";
import Image from "next/image"

import sMain from '../styles/Main.module.css'

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

export default function About() {
	return (
		<>
			<Head><title>About</title></Head>

			<motion.section
                initial="hidden"
                whileInView="visible"
                id="about" className={`${sMain.section} `}
            >
				<motion.div
                    custom={1}
                    variants={blockAnimation}
                    className={sMain.container}
                >
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>About</b></h1>
					</div>
					<div className={`${sMain.container_blocks} ${sMain.column}`}>
						<div className={sMain.block}>
                            <Image src="/about.gif"
                            width="800" height="425"
                            alt="RedBookCreature"
                            placeholder="blur"
                            blurDataURL="/about.gif" />  
                        </div>
                        <div className={`${sMain.block} ${sMain.center}`}>
                            <p>RedClub is a project dedicated to charity and saving creatures from the red book. <br />Each creature is transferred to nft, it cannot be reproduced, taken away or destroyed. <br/> Royalities from the sale go to save creatures from the red book.</p>
                        </div>
					</div>
				</motion.div>
			</motion.section>
		</>	
	);
}
	