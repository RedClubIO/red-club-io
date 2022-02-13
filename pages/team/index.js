import Head from 'next/head'
import Image from "next/image"

import sMain from '../../styles/Main.module.css'
import sTeam from '../../styles/Team.module.css'

import { team } from '../../components/data/team'

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

export default function Team() {
	return (
		<>
			<Head><title>Team</title></Head>
			<motion.section
                 initial="hidden"
                 whileInView="visible"
                id="team" className={`${sMain.section} ${sTeam.section}`}
            >
				<motion.div
                    custom={1}
                    variants={blockAnimation}
                    className={sMain.container}
                >
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Red</b>Team</h1>
					</div>
					<div className={sTeam.container_cards}>
                        {team.items.map(item => (
                            <TeamItem key={item.id} {...item} />
                        ))}
					</div>
				</motion.div>
			</motion.section>
		</>
		)
	}
	

const TeamItem = ({name, role, img}) => (
    <div className={sTeam.card}>
        <div className={sTeam.card_img}>
            <Image src={img}
                width="300" height="300"
                alt="RedBookCreature"
                placeholder="blur"
                blurDataURL={img}
            />
        </div>
        <div className={sTeam.card_text}>
            <h4>{name}</h4>
            <span>{role}</span>
        </div>
    </div>
)