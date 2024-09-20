
import Image from "next/image" ;

import styles from "../../page.module.css" ;

export default function Brand () {

    return (

        <div className = { styles .brand } >

            <Image src = { "/logo.svg" } alt = "UI Logo" width = { 50 } height = { 50 } />

            <p>

                UI

            </p>

        </div>

    ) ;

} ;
