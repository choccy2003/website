import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    const [formData, setFormData] = useState({
        password: '',
        email: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:3001/users/login', formData)
            .then((response) => {
                console.log('Logged in successfully:', response.data);
                if (response.data.msg === 'Login successful!') {
                    props.updatecartarr(response.data.data.cart)
                    props.setuserdata(response.data.data)
                    toast.success('Logged in successfully!', {
                        onClose: () => {
                            props.setLoggedin(true)


                            setTimeout(() => {
                                navigate('/');
                            }, 2000);
                        },
                    });
                }

            })
            .catch((error) => {
                console.error('Error logging in:', error);
                toast.error('Error logging in. Please try again.');
            });
    };

    return (
        <div style={{ height: '100%', width: '100%', backgroundColor: 'white', position: 'absolute', zIndex: '9999', top: '0px', left: '0px' }}>
            <div>
                <div style={{ fontSize: '44px', fontFamily: 'Arial, Helvetica, sans-serif', paddingTop: '10%', margin: 'auto', maxWidth: 'fit-content', fontWeight: 600 }}>
                    <span><Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Website</Link></span>
                </div>
                <div style={{ height: '450px', width: '390px', backgroundColor: 'rgb(233, 233, 233)', borderRadius: '15px', margin: 'auto', marginTop: '70px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    <div style={{ fontSize: '28px', fontFamily: 'Arial, Helvetica, sans-serif', paddingTop: '30px', fontWeight: 600, width: 'auto', marginBottom: '30px' }}>
                        <div style={{ margin: 'auto', width: 'fit-content' }}>Sign in</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div style={{ fontSize: '17px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px', marginTop: '45px' }}>
                            Email<br />
                            <input
                                style={{ marginTop: '5px', backgroundColor: 'rgb(233, 233, 233)', width: '220px', border: '1px solid black', height: '23px', borderRadius: '3px' }}
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ fontSize: '17px', marginTop: '15px', fontWeight: 500, fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '80px' }}>
                            Password<br />

                            <input
                                style={{ marginTop: '5px', backgroundColor: 'rgb(233, 233, 233)', width: '220px', border: '1px solid black', height: '23px', borderRadius: '3px' }}
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ width: 'auto', marginLeft: '205px' }}>
                            <a style={{ color: 'black', fontSize: '13px', fontWeight: 500 }} href="#">Forgot password?</a>
                        </div>
                        <button
                            style={{ width: '230px', marginLeft: '80px', borderRadius: '3px', height: '33px', backgroundColor: '#7ba550', border: 'none', color: 'white', fontSize: '16px', marginTop: "30px" }}
                            type="submit"
                        >
                            Log in
                        </button>
                    </form>
                    <div style={{ width: '60px', position: 'relative', left: '165px', top: '11px', zIndex: 10, backgroundColor: 'rgb(233, 233, 233)' }}>
                        <div style={{ width: 'fit-content', margin: 'auto' }}>or</div>
                    </div>
                    <hr style={{ width: '260px', margin: 'auto', marginBottom: '20px' }} />
                    <button
                        style={{ width: '230px', marginLeft: '80px', borderRadius: '3px', height: '33px', backgroundColor: '#bc1515', border: 'none', color: 'white', fontSize: '16px' }}
                        type="button"
                    >
                        Continue with Google
                    </button>

                </div>
                <ToastContainer />
                <div style={{ width: 'fit-content', margin: 'auto', marginTop: '10px', fontWeight: 500 }}>New to Website? <span style={{ textDecoration: 'none' }}><Link to={'/signup'}>Join now</Link></span></div>
                <div style={{ fontSize: '14px', width: 'fit-content', margin: 'auto', opacity: '0.6', marginTop: '50px' }}>
                    All content is © 2023 by Website. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Login;
