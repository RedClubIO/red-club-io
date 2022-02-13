import Head from 'next/head'

import Link from "next/link";
import Image from "next/image"

import sMain from '../styles/Main.module.css'
import sCharity from '../styles/Charity.module.css'

import { FcMoneyTransfer, FcBinoculars, FcCalculator } from 'react-icons/fc';

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

export default function Charity() {
	return (
		<>
			<Head><title>Charity</title></Head>

			<motion.section
                initial="hidden"
                whileInView="visible"
                id="charity" className={`${sMain.section} `}
            >
				<motion.div
                    custom={1}
                    variants={blockAnimation}
                    className={sMain.container}
                >
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Charity</b></h1>
					</div>
					<div className={`${sCharity.container_charities}`}>
                        <div className={sCharity.charity}>
                            <div className={sCharity.charity_icon}>
                                <FcCalculator />
                            </div>
                            <div className={sCharity.charity_info}>
                                <h5>Price</h5>
                                <span> = 0.3 ETH</span>
                                <span><b>Last 24 Hrs:</b> +666 ETH</span>
                                <span><b>Last Month:</b> +999 ETH</span>
                            </div>
                        </div>
                        <div className={sCharity.charity}>
                            <div className={sCharity.charity_icon}>
                                <FcBinoculars />
                            </div>
                            <div className={sCharity.charity_info}>
                                <h5>Animals:</h5>
                                <span> = 7.777</span>
                                <span><b>Last 24 Hrs:</b> +14</span>
                                <span><b>Last Month:</b> +213</span>
                            </div>
                        </div>
						<div className={sCharity.charity}>
                            <div className={sCharity.charity_icon}>
                                <FcMoneyTransfer />
                            </div>
                            <div className={sCharity.charity_info}>
                                <h5>Roalty</h5>
                                <span> = 59.312 ETH</span>
                                <span><b>Last 24 Hrs:</b> +400 ETH</span>
                                <span><b>Last Month:</b> +1000 ETH</span>
                            </div>
                        </div>
					</div>
				</motion.div>
			</motion.section>
		</>	
	);
}
	