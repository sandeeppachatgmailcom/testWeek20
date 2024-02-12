import { Outlet } from "react-router-dom"
import MenuBar from "./header"
import { useContext } from "react"
import MyUser from "../utils/context"
import { useSelector } from "react-redux"

const Root = () => {
    const user = useContext(MyUser)
    const employee = useSelector((state)=>state.user.user)
    console.log(employee)
    return (
        <div className="container-flex">
            <div className="container col-12 bg-secondary" style={{ height: '35vh' }}>
                <h4>{user.user}</h4>
                 
                <MenuBar/> 
                <Outlet/>
                <h1 className="btn text-light">  Main Page </h1>
            </div>
            <div className="container col-12 bg-danger" style={{height:'30vh'}} >
               
            </div>
            
        </div>
    )
}

export default Root