import Head from 'next/head'
import Image from "next/image"

import sMain from '../../styles/Main.module.css'
import sTeam from '../../styles/Team.module.css'

import { team } from '../../components/data/team'

export default function Team() {
	return (
		<>
			<Head><title>Team</title></Head>
			<section id="team" className={`${sMain.section} ${sTeam.section}`}>
				<div className={sMain.container}>
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Red</b>Team</h1>
					</div>
					<div className={sTeam.container_cards}>
                        {team.items.map(item => (
                            <TeamItem key={item.id} {...item} />
                        ))}
					</div>
				</div>
			</section>
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