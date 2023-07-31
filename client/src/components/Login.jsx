import React from 'react'

const Login = () => {

    return (
        <div><div>
            <div style={{ fontSize: '30px', fontFamily: 'Arial, Helvetica, sans-serif', paddingTop: '20px', margin: 'auto', maxWidth: 'fit-content', fontWeight: 600 }}>
                <span>Website</span>
            </div>
            <div style={{ height: '450px', width: '390px', backgroundColor: 'rgb(225, 225, 225)', borderRadius: '15px', margin: 'auto', marginTop: '70px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                <div style={{ fontSize: '24px', fontFamily: 'Arial, Helvetica, sans-serif', paddingTop: '30px', fontWeight: 600, marginLeft: '80px', width: 'auto', marginBottom: '30px' }}>
                    Sign
                    in</div>
                <div style={{ fontSize: '17px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px' }}>
                    Email<br />
                    <input style={{ marginTop: '5px', backgroundColor: 'rgb(225, 225, 225)', width: "220px", border: "1px solid black", height: "23px", borderRadius: "3px" }} type="text" />
                </div>
                <div style={{ fontSize: '17px', marginTop: '15px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px' }}>
                    Password<br />
                    <input style={{ marginTop: '5px', backgroundColor: 'rgb(225, 225, 225)', width: "220px", border: "1px solid black", height: "23px", borderRadius: "3px" }} type="password" />
                </div>
                <div style={{ width: 'auto', marginLeft: '205px' }}>
                    <a style={{ color: 'black', fontSize: '13px', fontWeight: 500 }} href="#">Forgot password?</a>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <input style={{ width: '230px', marginLeft: '80px', borderRadius: '3px', height: '33px', backgroundColor: '#6A983C', border: 'none', color: 'white' }} type="button" defaultValue="Sign in" />
                </div>
                <div>
                    <div style={{ width: '60px', position: 'relative', left: '165px', top: '11px', zIndex: 10, backgroundColor: 'rgb(225, 225, 225)' }}>
                        <div style={{ width: 'fit-content', margin: 'auto' }}>or</div>
                    </div>
                    <hr style={{ width: '260px', margin: 'auto', marginBottom: '20px' }} />
                </div>
                <div>
                    <input style={{ width: '230px', marginLeft: '80px', borderRadius: '3px', height: '33px', backgroundColor: '#bc1515', border: 'none', color: 'white' }} type="button" defaultValue="Continue with Google" />
                </div>
            </div>
            <div style={{ width: 'fit-content', margin: 'auto', marginTop: '10px', fontWeight: 500 }}>New to Website ? <a style={{ textDecoration: 'none' }} href="#">Join
                now</a></div>
            <div style={{ fontSize: '12px', width: 'fit-content', margin: 'auto', opacity: '0.6', marginTop: '50px' }}>
                All content is © 2019 by Website. All rights reserved
            </div>
        </div></div>
    )
}

export default Login