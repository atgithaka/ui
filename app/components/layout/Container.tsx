
import styles from "../../page.module.css" ;

export default function Container ( { children } : ChildrenProps ) {

    return (

        <div className = { styles .container } >

            { children }

        </div>

    ) ;

} ;
