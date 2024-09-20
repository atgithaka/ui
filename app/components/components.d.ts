
import { ReactNode } from "react" ;

declare global {

    interface ChildrenProps {

        children : ReactNode ;

    }

    interface ContainerProps extends ChildrenProps {

        style ? : string ;

    }

    interface NameUrl {

        name : string ;

        URL : string ;

    }

} ;

export {} ;