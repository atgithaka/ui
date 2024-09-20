
import styles from "../../page.module.css" ;

export default function Container ( { children , style } : ContainerProps ) {

    return (

        <div className = { [ styles .container , style ] .join (" ") } >

            { children }

        </div>

    ) ;

} ;
