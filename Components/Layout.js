import React from 'react';
import Navba from './Navbar';


export default function Layout({children}){
    return (
      <div className='layout'>
        <Navba />
        {children}
      </div>
    )
  
}