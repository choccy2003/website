import React, { useState, useEffect } from 'react'
import Starrating from 'react-star-ratings'
import "../styles/itempage.css"
import { useParams } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { FaRegHeart, FaUserCircle } from 'react-icons/fa'
import { GrFormAdd } from 'react-icons/gr'
import Check from '../small components/Check'



const Itempage = (props) => {
  const [displaylist, updatedisplay] = useState(false);
  const [displayqlist, updateqlist] = useState(false);
  const [cartbtn, updatecartbtn] = useState(false);
  const [wish, updatewish] = useState(false);
  const [addwish, updateaddwish] = useState(false);
  const [remwish, updateremwish] = useState(false);
  const [activedes, updatedes] = useState(true);
  const [activerev, updaterev] = useState(false);
  const [activeques, updateques] = useState(false);
  let { id } = useParams()

  const dispfunc = () => {
    if (displaylist === true) {
      updatedisplay(false)
    }
    else {
      updatedisplay(true)
      updateqlist(false)
    }
  }
  const dispfunc2 = () => {
    if (displayqlist === true) {
      updateqlist(false)
    }
    else {
      updateqlist(true)
      updatedisplay(false)
    }
  }
  const udpsize = (e) => {
    props.best_array[id].size = e.target.innerText;
    updatedisplay(false)
  }
  const udpquan = (e) => {
    props.best_array[id].quantity = e.target.innerText;
    updateqlist(false)

  }
  const btnstate = () => {
    updatecartbtn(true)
    setTimeout(clrbtnstate, 2000)
  }
  const clrbtnstate = () => {
    updatecartbtn(false)
  }
  const wishfn = () => {
    if (addwish === true) {
      updateaddwish(false)
      updateremwish(true)
      setTimeout(() => updateremwish(false), 5000)
    }
    else {
      updateaddwish(true)
      updateremwish(false)
    }
  }
  const multifn = () => {
    btnstate()
    if ((props.best_array[id].quantity > 0) && (props.best_array[id].size !== 'Size')) {
      props.appendfn(props.best_array[id])
    }


  }
  const shoeSizes = [
    { us: 4, uk: 3.5, europe: 36 },
    { us: 4.5, uk: 4, europe: 37 },
    { us: 5, uk: 4.5, europe: 37.5 },
    { us: 5.5, uk: 5, europe: 38 },
    { us: 6, uk: 5.5, europe: 38.5 },
    { us: 6.5, uk: 6, europe: 39 },
    { us: 7, uk: 6.5, europe: 40 },
    { us: 7.5, uk: 7, europe: 40.5 },
    { us: 8, uk: 7.5, europe: 41 },
    { us: 8.5, uk: 8, europe: 42 },
    { us: 9, uk: 8.5, europe: 42.5 },
    { us: 9.5, uk: 9, europe: 43 },
    { us: 10, uk: 9.5, europe: 44 },
    { us: 10.5, uk: 10, europe: 44.5 },
    { us: 11, uk: 10.5, europe: 45 },
  ];
  
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    
    (async () => {
      await props.fetchData();
      setDataFetched(true); 
    })();
  }, []);
 
  if (!dataFetched) {
    
    return <div>Loading...</div>;
  }
  if (props.best_array.length >= id) {
    return (
      <div>
        <div className='product-page'>
          <div className='img-grid'>

            <div className='product-img'><img src={props.best_array[id].image[0]} style={{ width: "100%", height: "auto" }} alt='o'></img></div>
            <div className='product-img' ><img src={props.best_array[id].image[1]} style={{ width: "100%", height: "auto" }} alt='o'></img></div>
            <div className='product-img'><img src={props.best_array[id].image[2]} style={{ width: "100%", height: "auto" }} alt='o'></img></div>
          </div>
          <div className='info-grid'>

            <div className='product-info'>
              <div className='prod-name'>
                {props.best_array[id].name}
                <span style={{ position: "relative", left: "15px", width: "20px" }} ><span style={{ display: "inline-block", height: "20px", userSelect: "none" }} onMouseEnter={() => updatewish(true)} onMouseLeave={() => updatewish(false)} onClick={wishfn} >{(!addwish && !wish) && (<FaRegHeart style={{ height: "20px", width: "20px" }} />)}{(addwish || wish) && (<svg width="20" height="20" viewBox="0 0 250 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221.414 32.718C195.405 13.3295 156.725 16.817 132.853 38.3643L123.503 46.7923L114.154 38.3643C90.3289 16.817 51.6015 13.3295 25.5935 32.718C-4.21144 54.9712 -5.77762 94.9106 20.8949 119.032L112.73 201.983C118.663 207.339 128.297 207.339 134.229 201.983L226.065 119.032C252.785 94.9106 251.218 54.9712 221.414 32.718Z" fill="#D9001D" />
                  <path d="M223.828 16.2287C195.605 -8.17315 152.002 -4.50786 125 23.7601C97.998 -4.50786 54.3945 -8.22336 26.1719 16.2287C-10.5468 48.0113 -5.17572 99.8276 20.9961 127.292L106.641 217.017C111.523 222.138 118.066 225 125 225C131.982 225 138.477 222.188 143.359 217.067L229.004 127.342C255.127 99.8778 260.596 48.0615 223.828 16.2287ZM212.305 110.372L126.66 200.096C125.488 201.301 124.512 201.301 123.34 200.096L37.6953 110.372C19.8731 91.6936 16.2598 56.3461 41.2598 34.7058C60.2539 18.2873 89.5508 20.7475 107.91 39.9778L125 57.9026L142.09 39.9778C160.547 20.6471 189.844 18.2873 208.74 34.6556C233.691 56.2959 229.98 91.8443 212.305 110.372Z" fill="black" />
                </svg>)} </span>
                  {addwish && (<span style={{ color: "red", fontSize: "12px", position: "relative", left: "20px" }}>Added to wishlist!</span>)}{remwish && (<span style={{ color: "red", fontSize: "12px", position: "relative", left: "20px" }}>Removed from wishlist!</span>)}</span>

              </div>
              <div>
                <Starrating rating={props.best_array[id].rating} starRatedColor={'#d3af37'} starDimension={"22px"} starSpacing={"0px"} />
                <span className='rate'>{'('}{props.best_array[id].review} {'ratings)'}</span>
              </div>
              <div className='prod-des'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae in minus molestiae quas reiciendis quia, quis fugiat similique consequuntur repellat beatae delectus dignissimos natus dolores dolor nostrum! Id, unde obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a libero, fuga earum, voluptates ab id exercitationem cupiditate quisquam adipisci assumenda tempore vero est modi. Facere consectetur quae modi unde.
              </div>
              <div className='prod-det'>
                <ul className='list'>
                  <li><span className='ques'>Category:</span><span className='ans er'>{props.best_array[id].category}</span></li>
                  <li><span className='ques'>Brand:</span><span className='ans er'>Brand name</span></li>
                  <li><span className='ques'>Stock:</span><span className='ans er'>In stock</span></li>
                </ul>
                <ul className='list'>
                  <li><span className='ques'>Delivery:</span><span className='ans'>3-5 Days</span></li>
                  <li><span className='ques'>Region:</span><span className='ans'>India</span></li>
                  <li><span className='ques'>{"Sizes Available"+(props.best_array[id].category=='Footwear'?("(US):"):(""))}</span>{props.best_array[id].category==='Clothing'?(<span className='ans'><span className='size'><span className='size-txt'>&nbsp;S</span></span><span className='size'><span className='size-txt'>M</span></span><span className='size'><span className='size-txt'>&nbsp;L</span></span><span className='size'><span className='size-txt'>XL</span></span><span className='size'>XXL</span></span>):(<span className='ans' ><span className='size'><span className='size-txt'>&nbsp;7</span></span><span className='size'><span className='size-txt'>&nbsp;8</span></span><span className='size'><span className='size-txt'>&nbsp;9</span></span><span className='size'><span className='size-txt'>10</span></span><span className='size'>&nbsp;11</span></span>)}</li>
                </ul>

              </div>
              <div className='btn-grid2'>
                <div className='prod-price'><span style={{ fontFamily: "sans-serif" }}>₹&nbsp;</span>{props.best_array[id].price.toLocaleString('en-IN')}</div>
                <div className='sizebox'>
                  <div className='size-btn'>
                    <div style={{ height: "20px", width: "26px",fontSize:"17px" }}>{props.best_array[id].size}</div>
                    <div className='dd-btn' onClick={dispfunc}><FiChevronDown /></div>
                  </div>


                </div>
                <div className='qbox'>
                  <div className='size-btn'>
                    <input className='qtxt' type='text' placeholder={props.best_array[id].quantity}></input>
                    <div style={{ display: "inline-block", opacity: "0.6" }}>pcs</div>
                    <div className='dd-btn' onClick={dispfunc2}><FiChevronDown /></div>
                  </div>


                </div>
                <div className='cart-btn' onClick={multifn}><div className='sym'>{!cartbtn && (<GrFormAdd style={{ height: "26px", width: "28px" }} className='cl' />)}{cartbtn && (<Check />)}</div>Add to cart</div>
              </div>
              {displayqlist && (
                <div className='quan-list' onClick={(e) => udpquan(e)}><ol><li className='qitms' onClick={(e) => udpquan(e)}>1</li><li className='qitms' onClick={(e) => udpquan(e)}>2</li><li className='qitms' onClick={(e) => udpquan(e)}>3</li><li className='qitms' onClick={(e) => udpquan(e)}>4</li><li className='qitms' style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>5</li></ol></div>
              )}

              {displaylist && (props.best_array[id].category==='Clothing'?(<div className='size-list' onClick={(e) => udpsize(e)}><ol><li className='itms' onClick={(e) => udpsize(e)}>S</li><li className='itms' onClick={(e) => udpsize(e)}>M</li><li className='itms' onClick={(e) => udpsize(e)}>L</li><li className='itms' onClick={(e) => udpsize(e)}>XL</li><li className='itms' style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>XXL</li></ol></div>):(<div className='size-list' onClick={(e) => udpsize(e)}><ol><li className='itms' onClick={(e) => udpsize(e)}>7</li><li className='itms' onClick={(e) => udpsize(e)}>8</li><li className='itms' onClick={(e) => udpsize(e)}>9</li><li className='itms' onClick={(e) => udpsize(e)}>10</li><li className='itms' style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>11</li></ol></div>))}


            </div>

            <div className='pannel'><div className='pannel-itms' onClick={() => { updatedes(true); updaterev(false); updateques(false) }}>Description<br /><hr className={activedes ? 'line2' : 'inv'}></hr></div><div className='pannel-itms' onClick={() => { updatedes(false); updaterev(true); updateques(false) }}>Reviews<br /><hr className={activerev ? 'line2' : 'inv'} style={{ maxWidth: "75%" }}></hr></div><div className='pannel-itms' onClick={() => { updatedes(false); updaterev(false); updateques(true) }}>Questions<br /><hr className={activeques ? 'line2' : 'inv'} style={{ maxWidth: "90%" }}></hr></div></div>
            <div className='disbox'>
              {activedes &&  (<div>
                <div style={{ fontWeight: "600", fontSize: "20px", fontFamily: "Poppins", paddingBottom: "10px", paddingTop: "10px" }}>Origin</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum nulla aspernatur modi reiciendis blanditiis ipsam id excepturi tenetur placeat molestiae, alias culpa fugiat aperiam eum laudantium exercitationem nesciunt. Aspernatur!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, a tenetur. Placeat reprehenderit minima sint repellendus fugit blanditiis dignissimos eius similique deleniti fugiat? Tempora fugit ab nisi libero quisquam eius? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam voluptas, fuga officiis vel tempora ipsa autem est incidunt. Modi quas voluptatem omnis quidem ducimus, laboriosam doloremque sapiente magni aperiam?
                <div style={{ fontWeight: "600", fontSize: "20px", fontFamily: "Poppins", paddingBottom: "10px", paddingTop: "20px" }}>Our size chart</div>
                {props.best_array[id].category==='Clothing'?(<table className='sizetable'>
                  <thead>
                    <tr>
                      <td>Category</td>
                      <td>Small</td>
                      <td>Medium</td>
                      <td>Large</td>
                      <td>X-Large</td>
                      <td>XX-Large</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Neck</td>
                      <td>14-14.5</td>
                      <td>15-15.5</td>
                      <td>16-16.5</td>
                      <td>17-17.5</td>
                      <td>18-18.5</td>
                    </tr>
                    <tr>
                      <td>Chest</td>
                      <td>35-37</td>
                      <td>38-40</td>
                      <td>41-43</td>
                      <td>44-46</td>
                      <td>47-49</td>
                    </tr>
                    <tr>
                      <td>Sleeve</td>
                      <td>32-33</td>
                      <td>33-34</td>
                      <td>34-35</td>
                      <td>35-36</td>
                      <td>36-36.5</td>
                    </tr>
                    <tr>
                      <td>Waist</td>
                      <td>29-31</td>
                      <td>32-34</td>
                      <td>35-37</td>
                      <td>38-40</td>
                      <td>41-43</td>
                    </tr>
                  </tbody>
                </table>):(    <table className='sizetable' style={{fontSize:"20px"}}>
      <thead>
        <tr>
          <th>US</th>
          <th>UK</th>
          <th>Europe</th>
        </tr>
      </thead>
      <tbody>
        {shoeSizes.map((size, index) => (
          <tr key={index}>
            <td>{size.us}</td>
            <td>{size.uk}</td>
            <td>{size.europe}</td>
          </tr>
        ))}
      </tbody>
    </table>)}
              </div>)}
              {activerev && (<div>
                <div className='review-card'>
                  <FaUserCircle style={{ height: "40px", width: "40px", fill: "grey" }}></FaUserCircle><span style={{ fontWeight: "500", position: "relative", left: "10px", bottom: "20px", fontSize: "17px" }}>User Name<div style={{ fontWeight: "500", fontSize: "12px", position: "relative", left: "40px", opacity: "0.6" }}>Verified purchase</div></span>
                  <div style={{ position: "relative", left: "5px", bottom: "10px" }} ><Starrating rating={5} starRatedColor={'#d3af37'} starDimension={"20px"} starSpacing={"0px"} /><div style={{ fontWeight: "500", fontSize: "18px" }}>Review title</div><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odit optio. Culpa architecto est minus molestias. Deleniti iste aliquam hic impedit omnis quos est exercitationem. Veniam quas voluptatem odit aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia, quae id quaerat, rem esse ducimus amet dicta provident, debitis praesentium beatae unde! Odit cupiditate numquam aliquid, non asperiores provident!</div><hr style={{ marginTop: "30px", opacity: "0.6", borderRadius: "10px" }}></hr></div>

                </div>
                <div className='review-card'>
                  <FaUserCircle style={{ height: "40px", width: "40px", fill: "grey" }}></FaUserCircle><span style={{ fontWeight: "500", position: "relative", left: "10px", bottom: "20px", fontSize: "17px" }}>User Name<div style={{ fontWeight: "500", fontSize: "12px", position: "relative", left: "40px", opacity: "0.6" }}>Verified purchase</div></span>
                  <div style={{ position: "relative", left: "5px", bottom: "10px" }} ><Starrating rating={3} starRatedColor={'#d3af37'} starDimension={"20px"} starSpacing={"0px"} /><div style={{ fontWeight: "500", fontSize: "18px" }}>Review title</div><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odit optio. Culpa architecto est minus molestias. Deleniti iste aliquam hic impedit omnis quos est exercitationem. Veniam quas voluptatem odit aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia, quae id quaerat, rem esse ducimus amet dicta provident, debitis praesentium beatae unde! Odit cupiditate numquam aliquid, non asperiores provident!</div><hr style={{ marginTop: "30px", opacity: "0.6", borderRadius: "10px" }}></hr></div>

                </div>
                <div className='review-card'>
                  <FaUserCircle style={{ height: "40px", width: "40px", fill: "grey" }}></FaUserCircle><span style={{ fontWeight: "500", position: "relative", left: "10px", bottom: "20px", fontSize: "17px" }}>User Name<div style={{ fontWeight: "500", fontSize: "12px", position: "relative", left: "40px", opacity: "0.6" }}>Verified purchase</div></span>
                  <div style={{ position: "relative", left: "5px", bottom: "10px" }} ><Starrating rating={4} starRatedColor={'#d3af37'} starDimension={"20px"} starSpacing={"0px"} /><div style={{ fontWeight: "500", fontSize: "18px" }}>Review title</div><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odit optio. Culpa architecto est minus molestias. Deleniti iste aliquam hic impedit omnis quos est exercitationem. Veniam quas voluptatem odit aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quia, quae id quaerat, rem esse ducimus amet dicta provident, debitis praesentium beatae unde! Odit cupiditate numquam aliquid, non asperiores provident!</div><hr style={{ marginTop: "30px", opacity: "0.6", borderRadius: "10px" }}></hr></div>

                </div>
              </div>)}



            </div>



          </div>

        </div>


      </div>
    )
  }
  else {
    return (
      <div>
        <div>Product ID not found</div>
      </div>
    )
  }

}

export default Itempage