
import Main from "./components/layout/Main" ;

import Aside from "./components/layout/Aside" ;

import Dropdown from "./components/ui/Dropdown" ;
import DropdownItem from "./components/ui/DropdownItem";

export default function Landing () {

  return (

    <>

      <Aside>

        <Dropdown>

          <DropdownItem name = "Logo" URL = "" />

          <DropdownItem name = "Test" URL = "" />

          <DropdownItem name = "Usage" URL = "" />

        </Dropdown>

      </Aside>
    
      <Main>

        <></>

      </Main>

    </>

  ) ;

} ;
