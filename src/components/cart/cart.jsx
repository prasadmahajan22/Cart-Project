import "./card.css";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Datas from './data.json'
import { useState } from "react";
let Card = (props) => {
    let obj = props;
    let setQuantity = obj.setQuantity;
    let quantity = obj.quantity;
    
    const [Data , setData] = useState([...Datas]);
    const [price , setPrice] = useState(499.99+399.99+699.99+599.99);
    
    

    let deleteElement = (num) => {
        let arr = Data.filter((ele , index) => num != index);
        setData([...arr]);
    }
    let total_price = {
        display : (quantity == 0) ? "none" : "flex"
    }

    let empty = {
        display : (quantity == 0) ? "block" : "none",
        color : "rgb(100, 116, 139)",
        fontWeight : "400",
        fontSize : "30.56px"
    }

  return (
    <>
      
      <div className="cart_box">
        <h1>YOUR BAG</h1>
        <h1 style={empty}>is currently empty</h1>
        <div className="products">
          
            {
                Data.map((element , index) => {
                  return  <div className="product" key={index}>

                                
                                <div className="img-details">

                                <div className="image">
                                    <img src={element.image} alt="" />
                                </div>

                                <div className="details">
                                    <h4 className="name">{element.name}</h4>
                                    <p className="price">${element.price}</p>
                                    <button onClick={() => {
                                         deleteElement(index)
                                         setPrice(price - (Data[index].quantity * Number(Data[index].price)))
                                         setQuantity(quantity - Data[index].quantity)
                                    }}>remove</button>
                                </div>

                                </div>
                            
                                <div className="quantity-box">

                                <button className="incre" onClick={() => {
                                    Data[index].quantity  = Data[index].quantity+1; 
                                    setQuantity(quantity+1)
                                    setPrice(price + Number(Data[index].price))
                                }}>
                                    <IoIosArrowUp  className="buttons"/>
                                </button>

                                <p className="quantity">{element.quantity}</p>

                                <button className="decre" onClick={() => {
                                    Data[index].quantity  = Data[index].quantity-1; 
                                    setQuantity(quantity-1)
                                    Data[index].quantity == 0 ? deleteElement(index) : "";
                                    setPrice(price - Number(Data[index].price))
                                }}>
                                    <IoIosArrowDown className="buttons"/>
                                </button>
                                </div>
                            </div>
                })

            }

        </div>

        <div className="total_price" style={total_price}>
            <hr />
            <div className="amount">
                <p>Total</p>
                <p className="total-amount">${price.toFixed(2)}</p>
            </div>
            <button className="clear" onClick={() => {
                setQuantity(0)
                setData([])
            }}>Clear Cart</button>
        </div>
      </div>
      
    </>
  );
};

export default Card;
