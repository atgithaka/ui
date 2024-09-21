
"use client" ;

import { useState } from "react" ;

import Image from "next/image" ;

import styles from "../../page.module.css" ;

export default function Dropdown ( { children } : ChildrenProps ) {

    const [ over , setOver ] = useState ( true ) ;

    const [ toogle , setToogle ] = useState ( true ) ;

    function enterTitle () {

        setOver ( !over )

    }

    function leaveTitle () {

        setOver ( !over )

    }

    function openDropdown () {

        setToogle ( !toogle ) ;

    }

    return (

        <div className = { styles .dropdown } >

            <div className = { `${ styles .dropdownTitle } ${ !toogle || !over ? styles .dropdownTitleActive : "" } }` } onMouseEnter = { enterTitle } onMouseLeave = { leaveTitle } onClick = { openDropdown } >

                <p>

                    Landing

                </p>

                { !toogle || !over ? <Image src = { "/icons/chevron-down-white.svg" } alt = "Chevron Down" width = { 50 } height = { 50 } /> : <Image src = { "/icons/chevron-down-black.svg" } alt = "Chevron Down" width = { 50 } height = { 50 } /> }

            </div>

            { toogle ? <></> : <div className = { styles .dropdownItems  } > { children } </div> }

        </div>

    ) ;

} ;
