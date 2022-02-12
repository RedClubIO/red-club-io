import React, { useState, useRef } from "react";
import Head from 'next/head'

import sMain from '../../styles/Main.module.css'
import sFaq from '../../styles/Faq.module.css'

import { FiChevronRight } from 'react-icons/fi';

import { faq } from '../../components/data/faq'


export default function Faq() {


	return (
		<>
			<Head><title>FAQ</title></Head>
			<section id="faq" className={`${sMain.section} ${sFaq.section}`}>
				<div className={sMain.container}>
					<div className={sMain.container_text}>
						<h1><b className={sMain.red}>Faq</b></h1>
					</div>
					<div className={sFaq.container_faqs}>
                        {faq.items.map(item => (
                            <AccordionItem key={item.id} id={item.id} title={item.title} content={item.content} />
                        ))}
					</div>
				</div>
			</section>
		</>
	)
}

const AccordionItem = (props) => {

    const i = props.id;
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i);
    }

    return (
        <div className={sFaq.accordion}>
            <div className={sFaq.accordion_title} onClick={() => toggle(i)}>
                <h4>{props.title}</h4>
                {selected === i ? (
                    <FiChevronRight className={sFaq.rotate}  />
                ): (
                    <FiChevronRight />
                )}{''}
            </div>
            <div
                className={selected === i ? `${sFaq.accordion_content} ${sFaq.show}` : `${sFaq.accordion_content} ${sFaq.hidden}`}
                dangerouslySetInnerHTML={{ __html: props.content }}
                >
            </div>
        </div>
        // <div className={sFaq.accordion_section}>
        //     <button className={`${sFaq.accordion} ${setActive}`}>
        //         <p className={sFaq.accordion_title}>{props.title}</p>
        //         <FcNext className={`${setRotate}`}  />
        //     </button>
        //     <div
        //         ref={content}
        //         className={sFaq.accordion_content}
        //     >
        //     <div
        //         className={sFaq.accordion_text}
        //     />
        //         {props.content}
        //     </div>
        // </div>
    );
}