import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Itemgrid from "./components/Itemgrid"
import Itempage from "./components/Itempage"
import './styles/navcss.css'
import Cartcard from "./small components/Cartcard";
import { RxCross2 } from 'react-icons/rx'
import { CiFaceFrown } from 'react-icons/ci'
import { FiChevronsRight } from 'react-icons/fi'
import Login from "./components/Login";
import Signup from "./components/Signup"
import Productadd from "./components/Productadd";
import Productdelete from "./components/Productdelete";
import Adminpage from "./components/Adminpage.jsx";
import Checkout from "./small components/Checkout";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function App() {
  var [best_array, setarray] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/users/listproducts');
      const jsonData = await response.json();
      setarray(jsonData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchData()
    })()

  }, [])

  const inc = (index) => {
    let newproduct_array = [...best_array]
    newproduct_array[index].quantity++
    setarray(newproduct_array);

  }
  const dec = (index) => {
    let newproduct_array = [...best_array]
    if (newproduct_array[index].quantity > 0) {
      newproduct_array[index].quantity--

    }



    setarray(newproduct_array)

  }
  const [displayani, updatedisp] = useState(false);
  const [displayani2, updatedisp2] = useState(false);
  const dispfn = () => {
    updatedisp2(false)
    if (displayani === true) {
      updatedisp(false)
    }
    else {
      updatedisp(true)
    }
  }
  const dispfn2 = () => {
    updatedisp(false)
    if (displayani2 === true) {
      updatedisp2(false)
    }
    else {
      updatedisp2(true)
    }
  }
  const [userdata, setuserdata] = useState({})

  const [cart_array, updatecartarr] = useState([])

  const deletefn = (value) => {
    updatecartarr(oldValues => {
      return oldValues.filter(cart_array => cart_array !== value)
    })

  }
  const appendfn = (val) => {
    const existingItemIndex = cart_array.findIndex(
      item => item.name === val.name && item.size === val.size && val.id === item.id
    );

    if (existingItemIndex !== -1) {

      const updatedCart = [...cart_array];
      updatedCart[existingItemIndex].quantity += Number(val.quantity);
      updatecartarr(updatedCart);
    } else {
      const newItem = { ...val, quantity: Number(val.quantity) };
      updatecartarr(prevCart => [...prevCart, newItem]);

    }
  };


  const carttotal = () => {
    let i = 0
    let total = 0
    for (i = 0; i < cart_array.length; i++) {
      total = total + parseInt(cart_array[i].quantity)
    }
    return total
  }
  const cartinc = (ind) => {
    const newar = [...cart_array]

    newar[ind].quantity += 1
    updatecartarr(newar)
  }
  const cartdec = (ind) => {
    const newar = [...cart_array]
    if (newar[ind].quantity > 1) {
      newar[ind].quantity -= 1
      updatecartarr(newar)
    }
    else {
      deletefn(cart_array[ind])
    }


  }

  const [displaycart, updatecartdisplay] = useState(false)
  let cartsum = 0
  let cartpricefn = () => {
    let number = 0, number2 = 0, number3 = 0;
    if (cart_array.length > 0) {


      for (let x of cart_array) {

        cartsum = cartsum + x.price * x.quantity

      }
      number = cartsum
      number2 = cartsum * 0.12
      number3 = number + number2
    }

    return (
      <>

        Subtotal: <div style={{ display: "inline-block", textAlign: "right", width: "75%" }}>{number.toLocaleString('en-in')}</div>
        <br />
        <span style={{ fontSize: "18px", opacity: "0.6" }}>
          GST: <div style={{ display: "inline-block", textAlign: "right", width: "85%" }}>{number2.toLocaleString('en-in')}</div>
        </span>
        <br />
        <span style={{ fontSize: "24px" }}>
          Grand Total: <div style={{ display: "inline-block", textAlign: "right", width: "63%" }}>{number3.toLocaleString('en-in')}</div>
        </span>


      </>
    )

  }

  useEffect(() => {
    if (cart_array.length > 0) {
      updatecartdisplay(true);


    } else {
      updatecartdisplay(false);
    }
  }, [cart_array]);

  const [isLoggedin, setLoggedin] = useState(false);
 const [checkout,setcheckout]= useState(false)
 const handleCheckout=()=>{
  if(isLoggedin){
    setcheckout(true)
  }
else{
  window.location.href = 'http://localhost:3000/login';
}
    
 } 

 const handleLogout=()=>{
    setLoggedin(false)
    setuserdata([])
    window.location.href = 'http://localhost:3000/';
  }
  useEffect(() => {
    const cartData = {
      email: userdata.email,
      password: userdata.password,
      cart: cart_array
    };

    axios.post('http://localhost:3001/users/addtocart', cartData)
      .then(response => {
        
        console.log('Cart updated:', response.data);
        // Handle success, show a toast, or update UI as needed
      })
      .catch(error => {
        console.error('Error updating cart:', error);
        // Handle error, show a toast, or update UI as needed
      });
  }, [cart_array])
  const [token,setToken]=useState(null)
  return (
    <div>

      <Router>


        <Navbar dispfn={dispfn} dispfn2={dispfn2} carttotal={carttotal} />




        <div className='nav-menu'><div className="nav-item">Best Sellers</div><div className="nav-item">New Arrivals</div><div className="nav-item">Clothing</div><div className="nav-item">Footwear</div><div className="nav-item">Accessories</div><div className="nav-item">Shop By Brand</div><div className="nav-item">Trending Now</div><div className="nav-item">Gifts</div><div style={{width:"120px"}}></div></div>




        <div className={`cart-menu ${displayani ? "cart-animation" : "inv"}`}>
          <div style={{ fontFamily: "Poppins", fontSize: "28px", marginLeft: "22px", marginTop: "15px", marginBottom: "-15px", display: "flex" }}><div>Your Cart</div><RxCross2 onClick={dispfn} style={{ marginLeft: "auto", position: "relative", right: "15px", top: "7px" }} />  </div>
          {cart_array.map((cart_item, i) => {
            return (<Cartcard deletefn={deletefn} key={i} cart_array={cart_item} cartinc={cartinc} cartdec={cartdec} index={i} best_array={best_array} />)
          })
          }

          {displaycart && (<div style={{ fontFamily: "Poppins", fontSize: "20px", marginLeft: "10px", marginTop: "30px" }}><div>{cartpricefn()}</div><div style={{ width: "fit-content", margin: "auto", marginTop: "40px" }}><button className="add-btn" style={{ fontSize: "24px", width: "300px", height: "45px" }}><div style={{ display: "inline", position: "relative", bottom: "5px" }} onClick={()=>{handleCheckout()}}>Proceed to checkout</div> <FiChevronsRight style={{ height: "30px", width: "30px", position: "relative", top: "2px" }} /> </button></div></div>)}
          {!displaycart && (<div style={{ opacity: "0.5" }}><CiFaceFrown style={{ height: "100px", width: "100px", position: "relative", top: "120px", left: "200px" }} /><div style={{ position: "relative", top: "150px", left: "90px", fontSize: "30px", fontFamily: "Poppins" }}>Cart is currently empty</div></div>)}


        </div>
        <div style={{ height: "703px" }} className={`cart-menu ${displayani2 ? "cart-animation" : "inv"}`}>
          <div style={{ fontFamily: "Poppins", fontSize: "28px", marginLeft: "22px", marginTop: "25px", marginBottom: "35px", display: "flex" }}>{isLoggedin ? (<div>Welcome {userdata.username}!</div>) : (<div>Welcome User!</div>)}<RxCross2 onClick={dispfn2} style={{ marginLeft: "auto", position: "relative", right: "15px", top: "7px" }} />  </div>
          {isLoggedin ? (<hr />) : (<div className="user-list" style={{ borderTop: "1px solid rgb(0, 0, 0,0.4)" }} ><Link className="login-link" to={'/login'} style={{ textDecoration: "none" }} >Login</Link></div>)}<div className="user-list">Account</div><div className="user-list">Wishlist</div><div className="user-list">Your orders</div>
          <div className="user-list">Track orders</div>
          <div className="user-list">Refund and returns</div><div className="user-list">Privacy policy</div>
          <div className="user-list">FAQ</div>
         {isLoggedin&&(<div className="user-list" onClick={handleLogout}>Log out</div>)} 

        </div>
        {checkout&&( <Checkout updatecartarr={updatecartarr} setcheckout={setcheckout} cart_array={cart_array} />)}
        
        <Routes>
          
          <Route exact path='/' element={<Itemgrid setarray={setarray} fetchData={fetchData} best_array={best_array} title={"Best sellers"} inc={inc} appendfn={appendfn} cart_array={cart_array} dec={dec} />} />
          <Route exact path='/products/:id' element={<Itempage userdata={userdata} fetchData={fetchData} best_array={best_array} appendfn={appendfn} setarray={setarray} cart_array={cart_array} />} />
          <Route exact path='/login' element={<Login updatecartarr={updatecartarr} setLoggedin={setLoggedin} isLoggedin={isLoggedin} setuserdata={setuserdata} userdata={userdata} setToken={setToken}/>}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/admin/addproduct' element={<Productadd token={token} />}></Route>
          <Route exact path='/admin/deleteproduct' element={<Productdelete token={token} />}></Route>
          <Route exact path='/admin' element={<Adminpage token={token} setarray={setarray} best_array={best_array} />}></Route>
          
        </Routes>

      </Router>



    </div>
  );
}

export default App;
