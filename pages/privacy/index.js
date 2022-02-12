import Head from 'next/head'

import sMain from '../../styles/Main.module.css'
import sDoc from '../../styles/Doc.module.css'

import { privacy } from '../../components/data/privacy'


export default function Terms() {
	return (
		<>
			<Head><title>Privacy Policy</title></Head>
			<section id="terms" className={`${sMain.section} ${sDoc.section}`}>
				<div className={sMain.container}>
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Privacy Policy</b></h1>
					</div>
					<div className={sDoc.container_doc}>
                        {privacy.items.map(item => (
                            <DocItem key={item.id} {...item} />
                        ))}
					</div>
				</div>
			</section>
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