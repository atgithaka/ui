
import styles from  "../../page.module.css" ;

import Header from "./Header" ;

export default function Main ( { children } : ChildrenProps ) {

    return (

        <main className = { styles .main } >

            <Header />

            <div className = { styles .container } >

                { children }

            </div>

        </main>

    ) ;

} ;
