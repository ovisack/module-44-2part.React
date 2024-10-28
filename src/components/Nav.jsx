
import { useState } from 'react';
import Link from './Link/Link';
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Nav = () => {
const [open,setOpen]= useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
      ];

    return (
        <div className='text-black bg-yellow-200 p-6 '>
        <nav className=' text-2xl'>
         <div className=' md:hidden' onClick={()=>setOpen(!open)}> {
open===true?<MdClose></MdClose>:<RiMenu2Line className=''></RiMenu2Line >

            }  </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open ?'top-16':'-top-60'}
                bg-yellow-200 px-6 `}>   
                 {
                routes.map((route)=><Link key={route.id } route={route}></Link>)
            }</ul>

        
        </nav>
        </div>
    );

};

export default Nav;