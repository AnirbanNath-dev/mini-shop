import { useState } from 'react'
import logo from '../assets/logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { Badge } from '@mui/material';
import Menu from '@mui/material/Menu';


import cartGif from '../assets/cartgif.gif';
import { useSelector } from 'react-redux';
import AddCart from './AddCart';




function NavBar() {
    const totalProducts = useSelector(state => state.totalProducts)
    const products = useSelector(state => state.products)
    console.log(products)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <>
            <div className='flex items-center justify-between w-full py-4 px-10 bg-slate-950 text-white'>

                <img src={logo} alt="" className='h-10' />
                <div className='flex gap-10 text-lg'>

                    <NavLink end to='/mini-shop/' className={({ isActive }) => `cursor-pointer , ${isActive ? 'text-sky-400' : null}`}>Home</NavLink>
                    <NavLink end to='/mini-shop/dets' className={({ isActive }) => `cursor-pointer , ${isActive ? 'text-sky-400' : null}`}>Cart</NavLink>
                    <NavLink end to='/mini-shop/contact' className={({ isActive }) => `cursor-pointer , ${isActive ? 'text-sky-400' : null}`}>Contact</NavLink>


                </div>
                <div>
                    <Badge
                        badgeContent={totalProducts}
                        color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>

                        <FaCartShopping className='text-2xl cursor-pointer ' />
                    </Badge>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        className='p-4'
                    >


                        {
                            totalProducts == 0 ? (
                                <div className='p-4 flex gap-2'>
                                    <img src={cartGif} alt="" className='h-9' />
                                    <span className='font-semibold text-lg'>Your Cart is empty</span>
                                    
                                </div>

                            ) : (
                                <div className='p-4 flex flex-col gap-2'>

                                    {
                                        products.map((product, index) => (
                                            <AddCart key={index} productName={product.name} price={product.price} imgUrl={product.image} quantity={product.quantity} id={product.id}/>
                                        ))

                                    }

                                    <div className='border-t-2 border-gray-700 pt-2'>

                                        <span className='text-md font-semibold'>Total Price : ₹ {products.reduce((acc, product) => {
                                            return acc + product.quantity * product.price;
                                        }, 0)

                                        }
                                        </span>

                                    </div>

                                </div>
                            )
                        }

                    </Menu>

                </div>
            </div>
        </>
    )
}

export default NavBar
