import Head from 'next/head'

import Image from "next/image"
import Link from "next/link";

import sMain from '../../styles/Main.module.css'
import sProject from '../../styles/Project.module.css'

import { FiChevronRight } from 'react-icons/fi';

import { projects } from '../../components/data/projects'

export default function Projects() {
	return (
		<>
			<Head><title>Projects</title></Head>
		
			<section id="home" className={`${sMain.section} ${sProject.section}`}>
				<div className={sMain.container}>
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Red</b>Projects</h1>
					</div>
					<div className={sProject.container_cards}>
                        {projects.items.map(item => (
                            <ProjectItem key={item.id} {...item} />
                        ))}
					</div>
				</div>
			</section>
		</>
    )
}


const ProjectItem = ({title, content, img, amount, link, cursor}) => (
    <div className={sProject.card} >
        <Link href={link}>
            <a style={{cursor: cursor}}>
                <div className={sProject.card_info}>
                    <div className={sProject.card_title}>
                        <h3>{title}</h3>
                    </div>
                    <div className={sProject.card_description}>
                        <p>{content}</p>
                    </div>
                    <div className={sProject.card_link}>
                        <span>{amount}</span>
                        <FiChevronRight />
                    </div>
                </div>
            </a>
        </Link> 
        <Image src={img}
            width="512" height="512"
            alt="RedBookCreature"
            placeholder="blur"
            blurDataURL={img} />     
    </div>
)