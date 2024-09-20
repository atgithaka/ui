
import styles from "../../page.module.css" ;

import Brand from "../ui/Brand" ;

import Container from "./Container" ;

export default function Aside ( { children } : ChildrenProps ) {

    return (

        <aside className = { styles.aside } >

            <Brand />

            <Container>

                { children }

            </Container>

        </aside>

    ) ;

} ;
