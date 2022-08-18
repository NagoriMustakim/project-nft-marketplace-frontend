import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ConnectButton } from "web3uikit"

const Header = () => {
    return (
        <div>
            <ul className="p-5 border-b-2 flex flex-row justify-between items-center">
                <Link href="/">
                    <a className={styles.navbar}>Home</a>
                </Link>
                <Link href="/sellnft">
                    <a className={styles.navbar}>sell NFT</a>
                </Link>
                <ConnectButton></ConnectButton>
            </ul>

        </div>
    )
}

export default Header