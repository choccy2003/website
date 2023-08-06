import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {

    return (
        <div style={{height:"100%",width:"100%",backgroundColor:"white",position:"absolute",zIndex:"9999",top:"0px",left:"0px"}}><div>
            <div style={{ fontSize: '44px', fontFamily: 'Arial, Helvetica, sans-serif', paddingTop: '10%', margin: 'auto', maxWidth: 'fit-content', fontWeight: 600 }}>
                <span><Link to={'/'} style={{textDecoration:"none",color:"black"}}>Website</Link></span>
            </div>
            <div style={{ height: '450px', width: '390px', backgroundColor: 'rgb(233, 233, 233)', borderRadius: '15px', margin: 'auto', marginTop: '70px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <div style={{ fontSize: '28px', fontFamily: 'Arial, Helvetica, sans-serif', paddingTop: '30px', fontWeight: 600, width: 'auto', marginBottom: '30px' }}>
                   <div style={{margin:"auto",width:"fit-content"}}>Sign
                    in</div> </div>
                <div style={{ fontSize: '17px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px',marginTop:"45px" }}>
                    Email<br />
                    <input style={{ marginTop: '5px', backgroundColor: 'rgb(233, 233, 233)', width: "220px", border: "1px solid black", height: "23px", borderRadius: "3px" }} type="text" />
                </div>
                <div style={{ fontSize: '17px', marginTop: '15px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px' }}>
                    Password<br />
                    <input style={{ marginTop: '5px', backgroundColor: 'rgb(233, 233, 233)', width: "220px", border: "1px solid black", height: "23px", borderRadius: "3px" }} type="password" />
                </div>
                <div style={{ width: 'auto', marginLeft: '205px' }}>
                    <a style={{ color: 'black', fontSize: '13px', fontWeight: 500 }} href="#">Forgot password?</a>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <input style={{ width: '230px', marginLeft: '80px', borderRadius: '3px', height: '33px', backgroundColor: '#7ba550', border: 'none', color: 'white',fontSize:"16px" }} type="button" defaultValue="Sign in" />
                </div>
                <div>
                    <div style={{ width: '60px', position: 'relative', left: '165px', top: '11px', zIndex: 10, backgroundColor: 'rgb(233, 233, 233)' }}>
                        <div style={{ width: 'fit-content', margin: 'auto' }}>or</div>
                    </div>
                    <hr style={{ width: '260px', margin: 'auto', marginBottom: '20px' }} />
                </div>
                <div>
                    <input style={{ width: '230px', marginLeft: '80px', borderRadius: '3px', height: '33px', backgroundColor: '#bc1515', border: 'none', color: 'white',fontSize:"16px"  }} type="button" defaultValue="Continue with Google" />
                </div>
            </div>
            <div style={{ width: 'fit-content', margin: 'auto', marginTop: '10px', fontWeight: 500 }}>New to Website ? <a style={{ textDecoration: 'none' }} href="#"><Link to={'/signup'}>Join
                now</Link></a></div>
            <div style={{ fontSize: '14px', width: 'fit-content', margin: 'auto', opacity: '0.6', marginTop: '50px' }}>
                All content is © 2023 by Website. All rights reserved
            </div>
        </div></div>
    )
}

export default Login