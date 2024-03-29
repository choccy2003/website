import React, { useState } from 'react';
import { BsCheckAll } from 'react-icons/bs';
import axios from 'axios';
import {RxCross1} from 'react-icons/rx'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Productdelete = (props) => {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        id: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };
    const [success, setsuccess] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:3001/admin/deleteproduct', product, {
                headers: { Authorization: `Bearer ${props.token}` },
              })
            .then((response) => {
                console.log('Product deleted successfully:', response.data);
                setsuccess(response.data.success)
                setTimeout(() => { setsuccess(false) }, 2000)

                toast.success('Product deleted successfully!', {
                    onClose: () => {
                        navigate('/admin');
                    },
                });
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
                toast.error('Error deleting product. Please try again.');
            });
    };
    return (
        <>
            <div>
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'white',
                        position: 'absolute',
                        zIndex: '9999',
                        top: '0px',
                        left: '0px',
                    }}
                >
                    <div
                        style={{
                            height: '500px',
                            width: '400px',
                            backgroundColor: 'rgb(233, 233, 233)',
                            margin: 'auto',
                            marginTop: '10%',
                            borderRadius: '7px',
                        }}
                    >
                         <div><RxCross1 style={{height:"30px",width:"30px",position:"relative",left:"350px",top:"20px"}} onClick={()=>{navigate('/admin')}}/></div>
                        <div
                            style={{
                                marginLeft: '20px',
                                fontSize: '32px',
                                fontWeight: '500',
                                width: 'fit-content',
                                margin: 'auto',
                                paddingTop: '20px',
                                paddingBottom: '30px',
                            }}
                        >
                            Delete products
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div
                                style={{
                                    marginLeft: '40px',
                                    fontSize: '22px',
                                    fontWeight: '500',
                                    marginTop: '10px',
                                }}
                            >
                                Product name
                            </div>
                            <input
                                value={product.name}
                                name="name"
                                style={{
                                    marginLeft: '40px',
                                    fontSize: '22px',
                                    fontWeight: '500',
                                    marginTop: '10px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                type="text"
                                onChange={handleChange}
                            />
                            <div
                                style={{
                                    marginLeft: '40px',
                                    fontSize: '22px',
                                    fontWeight: '500',
                                    marginTop: '10px',
                                }}
                            >
                                Product ID
                            </div>
                            <input
                                value={product.id}
                                name="id"
                                style={{
                                    marginLeft: '40px',
                                    fontSize: '22px',
                                    fontWeight: '500',
                                    marginTop: '10px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                type="text"
                                onChange={handleChange}
                            />


                            <div
                                style={{
                                    marginLeft: '40px',
                                    fontSize: '22px',
                                    fontWeight: '500',
                                    marginTop: '10px',
                                }}
                            >
                                Product category
                            </div>
                            <input
                                value={product.category}
                                name="category"
                                style={{
                                    marginLeft: '40px',
                                    fontSize: '22px',
                                    fontWeight: '500',
                                    marginTop: '10px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                type="text"
                                onChange={handleChange}
                            />

                            <div style={{ width: 'fit-content', margin: 'auto' }}>
                                <button
                                    type="submit"
                                    style={{
                                        fontSize: '22px',
                                        fontWeight: '500',
                                        marginTop: '35px',
                                        border: '1px solid black',
                                        borderRadius: '5px',
                                        height: '50px',
                                        width: '210px',
                                        backgroundColor: '#7ba550',
                                        color: 'white',
                                        border: '1px solid #46760A',
                                    }}
                                >
                                    Delete Product
                                </button>
                            </div>
                        </form>
                    </div>
                    {success && (
                        <div
                            style={{
                                width: 'fit-content',
                                margin: 'auto',
                                fontSize: '26px',
                                marginTop: '20px'
                            }}
                        >
                            <span style={{ fontSize: '40px', display: 'inline-block' }}>
                                <BsCheckAll />
                            </span>
                            <span style={{ position: 'relative', bottom: '10px' }}>
                                Product deleted successfully
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Productdelete