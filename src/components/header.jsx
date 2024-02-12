import { useSelector } from "react-redux"

const MenuBar = ()=>{
      
     
    return(
        <div className="container-flex ">
            <button className="btn text-light " >HOME </button>
            <button className="btn text-light " >ABOUT </button>
            <button className="btn text-light " >CONTACT </button>
            <button className="btn text-light " >APPLY </button>
            <button> </button>
        </div>
    )
}

export default MenuBar