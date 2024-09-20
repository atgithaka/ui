
import styles from  "../../page.module.css" ;

import Container from "./Container";

import Header from "./Header" ;

export default function Main ( { children } : ChildrenProps ) {

    return (

        <main className = { styles .main } >

            <Header />

                <Container style = "container-main" >
                    
                    { children }

                </Container>

        </main>

    ) ;

} ;
