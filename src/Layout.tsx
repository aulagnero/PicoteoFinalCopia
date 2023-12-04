import { Link, Outlet } from "react-router-dom"

const Layout = () => {

    return (

        <div>

        <nav>

            <ul>
                <li>
                    <Link to="/home"></Link>
                </li>
                <li>
                    <Link to="/"></Link>
                </li>
                
            </ul>
        </nav>
<Outlet></Outlet>
        </div>
    )


}
export default Layout;