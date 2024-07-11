import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import { useThemeStore } from '../../zustand/interface';


const Outlet: React.FC = () => {
    const { theme } = useThemeStore();
  return (
   
  
        // <div className={`h-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        //     <Navbar/>


        // </div>
     
     

  );
};

export default Outlet;
