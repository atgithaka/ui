
import styles from "../../page.module.css" ;

export default function DropdownItem ( { name , URL } : NameUrl ) {

    return (

        <a className = { styles .dropdownItem } href = { URL } >

            { name }

        </a>

    ) ;

} ;
