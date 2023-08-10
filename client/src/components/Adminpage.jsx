import React, { useState } from 'react'
import '../styles/itempage.css'
const Adminpage = () => {
    const [order, updateorder] = useState(false);
    const [view, updateview] = useState(false);
    const [add, updateadd] = useState(false);
    const [del, updatedel] = useState(false);
    const [upd, updateupd] = useState(false);
    return (
        <div style={{ position: "absolute", top: "0px", left: "0px", backgroundColor: "white", zIndex: "9999", height: "100%", width: "100%" }}>
            <div style={{ width: "fit-content", margin: "auto", fontSize: "40px", fontWeight: "500", marginTop: "50px" }}>Admin Page</div>
            <hr style={{ opacity: "0.6", marginTop: "50px", width: "80%" }} />
            <div style={{ marginLeft: "10%" }}>
                <div className='pannel'><div className='pannel-itms' onClick={() => { updateorder(true); updateview(false); updateadd(false); updatedel(false); updateupd(false); }} >View Orders<br /><hr className={order ? 'line2' : 'inv'} style={{ width: "fit-content" }}></hr></div><div className='pannel-itms' onClick={() => { updateorder(false); updateview(true); updateadd(false); updatedel(false); updateupd(false); }} >Products<br /><hr className={view ? 'line2' : 'inv'} style={{ maxWidth: "75%" }}></hr></div><div className='pannel-itms' onClick={() => { updateorder(false); updateview(false); updateadd(true); updatedel(false); updateupd(false); }} >Add product<br /><hr className={add ? 'line2' : 'inv'} style={{ maxWidth: "90%" }}></hr></div><div className='pannel-itms' onClick={() => { updateorder(false); updateview(false); updateadd(false); updatedel(true); updateupd(false); }} >Delete product<br /><hr className={del ? 'line2' : 'inv'}></hr></div><div className='pannel-itms' onClick={() => { updateorder(false); updateview(false); updateadd(false); updatedel(false); updateupd(true); }} >Update product<br /><hr className={upd ? 'line2' : 'inv'}></hr></div></div>
            </div>
        </div>
    )
}

export default Adminpage