import { Link } from "react-router-dom";
import "./index.css"
import "./App.css"

function SidebarA() {
    return (
        <ul className ="list-unstyled">
            {/* <li>
                <Link to= 'admin/productsA'>get All Products</Link>
            </li> */}
            <li>
                <Link to= 'admin/categoriesA'>get All Cateogries</Link>
            </li>
        </ul>
    )
}
export default SidebarA;