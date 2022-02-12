import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";


import styles from '../styles/Navbar.module.css'
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord, FaEthereum, FaInstagram } from 'react-icons/fa';
import { MdHome, MdGroups, MdOutlineExplore, MdBackupTable, MdHttps, MdGavel } from 'react-icons/md';
import { BiHash } from 'react-icons/bi';
import { FAQ, PRIVACY, PROJECTS, REDCLUB, ROADMAP, TEAM, TERMS } from "./data/links";



const navigation_top = [
	{id: 1, title: 'Home', path: REDCLUB.href, icon: <MdHome />},
	{id: 2, title: TEAM.text, path: TEAM.href, icon: <MdGroups />},
    {id: 3, title: FAQ.text, path: FAQ.href, icon: <BiHash />},
    {id: 4, title: ROADMAP.text, path: ROADMAP.href, icon: <MdOutlineExplore />},
    {id: 5, title: PROJECTS.text, path: PROJECTS.href, icon: <MdBackupTable />},
];



const navigation_bottom = [
	{id: 1, title: TERMS.text, path: TERMS.href, icon: <MdGavel />},
	{id: 2, title: PRIVACY.text, path: PRIVACY.href, icon: <MdHttps />},
];

export default function Navbar() {
	
	const [menuOpen, setMenuOpen] = useState('closed');
	
	const expandMenu = () => setMenuOpen(menuOpen === 'opened' ? 'closed' : 'opened');
	
	useEffect(() => {
		document.getElementById('menu').setAttribute('data-menu', menuOpen);
	}, [menuOpen]);
	
	const { pathname } = useRouter();
	
	return (
		<>
        <nav className={styles.nav}>
            <div className={styles.nav_el}>
                <button className={styles.nav_btn} onClick={expandMenu}>
                    {menuOpen === 'closed' ? (
                        <HiOutlineMenuAlt4 />
                        ) : (
                        <AiOutlineClose />
                        )}{' '}
                </button>
            </div>
            {/* <div className={styles.nav_el}>
                <Link href="https://twitter.com/" passHref={true}>
                    <a><AiOutlineTwitter /></a>
                </Link>
                <Link href="https://instagram.com/" passHref={true}>
                    <a><FaInstagram /></a>
                </Link>
                <Link href="https://discord.com/" passHref={true}>
                    <a><FaDiscord /></a>
                </Link>
            </div> */}
        </nav>
		<div className={styles.menu} id="menu">
            <div>
                {navigation_top.map(({ id, title, path, icon}) => (
                    <Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : null} onClick={expandMenu}>
                            {icon}
                            {title}
                        </a>
                    </Link>
                ))}
            </div>
            <div>
                {navigation_bottom.map(({ id, title, path, icon}) => (
                    <Link key={id} href={path}>
                        <a className={pathname === path ? styles.active : null} onClick={expandMenu}>
                            {icon}
                            {title}
                        </a>
                    </Link>
                ))}
            </div>
		</div>
		</>
	)
}
		