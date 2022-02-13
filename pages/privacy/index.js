import Head from 'next/head'

import sMain from '../../styles/Main.module.css'
import sDoc from '../../styles/Doc.module.css'

import { privacy } from '../../components/data/privacy'

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

export default function Terms() {
	return (
		<>
			<Head><title>Privacy Policy</title></Head>
			<motion.section
                initial="hidden"
                whileInView="visible"
                id="privacy" className={`${sMain.section} ${sDoc.section}`}
            >
				<motion.div
                    custom={1}
                    variants={blockAnimation}
                    className={sMain.container}
                >
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Privacy Policy</b></h1>
					</div>
					<div className={sDoc.container_doc}>
                        {privacy.items.map(item => (
                            <DocItem key={item.id} {...item} />
                        ))}
					</div>
				</motion.div>
			</motion.section>
		</>
		)
	}

const DocItem = ({title, date, content}) => (
    <div className={sDoc.document} >
        <div className={sDoc.document_title}>
            <h4>{title}</h4>
        </div>
        <div className={sDoc.document_date}>
            <span>{date}</span>
        </div>
        <div
            className={sDoc.document_content}
            dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>  
    </div>
)