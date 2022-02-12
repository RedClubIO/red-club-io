import Head from 'next/head'
import Image from "next/image"

import Link from "next/link";

import { AiOutlineClose, AiOutlineTwitter } from 'react-icons/ai';

import sMain from '../../styles/Home.module.css'
import sHome from '../../styles/Home.module.css'
import sRedFoxy from '../../styles/RedFoxy.module.css'

export default function RedFoxyClub() {
	return (
		<>
		<Head><title>RedFoxyClub</title></Head>
		
		<div className={`${sMain.section} ${sRedFoxy.explore}`}>
			<div className={`${sMain.container} ${sRedFoxy.container}`}>
				<div className={sRedFoxy.container_text}>
					<h1>RedFoxyClub</h1>
				</div>
				<div className={sRedFoxy.container_img}>
					<Image
						src="/RedFoxyClub/club.png"
						width="1919" height="720"
						alt="Club"
						placeholder="blur"
						blurDataURL="/RedFoxyClub/club.png"
					/>
				</div>
				<div className={sRedFoxy.container_text}>
						<p>RFC is a collection of 3,333 Red Foxy NFTs—unique digital collectibles living on the Ethereum blockchain.
						Your Bored Foxy doubles as your Club membership card, and grants access to members-only benefits.
						Future areas and perks can be unlocked by the community through roadmap activation.</p>
				</div>
				<div className={sRedFoxy.container_links}>
					<Link href="https://twitter.com/" passHref={true}>
						<a><AiOutlineTwitter />FAQ</a>
					</Link>
					<Link href="https://twitter.com/" passHref={true}>
						<a><AiOutlineTwitter />Team</a>
					</Link>
					<Link href="https://twitter.com/" passHref={true}>
						<a><AiOutlineTwitter />Explore</a>
					</Link>
					<Link href="https://twitter.com/" passHref={true}>
						<a><AiOutlineTwitter />Roadmap</a>
					</Link>
					<Link href="https://twitter.com/" passHref={true}>
						<a><AiOutlineTwitter />Mint</a>
					</Link>
				</div>
			</div>
		</div>
		
	
	</>
	)
}
