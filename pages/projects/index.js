import Head from 'next/head'

import Image from "next/image"
import Link from "next/link";

import sMain from '../../styles/Main.module.css'
import sProject from '../../styles/Project.module.css'

import { FiChevronRight } from 'react-icons/fi';

import { projects } from '../../components/data/projects'

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

export default function Projects() {
	return (
		<>
			<Head><title>Projects</title></Head>
		
			<motion.section
                initial="hidden"
                whileInView="visible"
                id="projects" className={`${sMain.section} ${sProject.section}`}
            >
				<motion.div
                    custom={1}
                    variants={blockAnimation}
                    className={sMain.container}
                >
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Red</b>Projects</h1>
					</div>
					<div className={sProject.container_cards}>
                        {projects.items.map(item => (
                            <ProjectItem key={item.id} {...item} />
                        ))}
					</div>
				</motion.div>
			</motion.section>
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