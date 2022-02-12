import Head from 'next/head'

import Link from "next/link";
import Image from "next/image"

import sMain from '../styles/Main.module.css'

export default function About() {
	return (
		<>
			<Head><title>About</title></Head>

			<section id="about" className={`${sMain.section} `}>
				<div className={sMain.container}>
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
				</div>
			</section>
		</>	
	);
}
	