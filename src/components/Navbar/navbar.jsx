import './navbar.css'
import { BsCartPlus } from "react-icons/bs";
let Navbar = (props) => {
    let obj = props;
    return (
        <div className="navbar">
            <h1>UseReducer</h1>
            <div className="cart">
                <BsCartPlus className='cart_icon'/>
                <p className='quantity'>{obj.quantity}</p>
            </div>
        </div>
    )
}

export default Navbar;