import { Typography } from "@mui/material";
import React from "react";
import HeaderButton from "../buttons/headerButton";

const Header = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
      const handleResumeClick = () => {
        console.log('Resume button clicked');
        window.open(process.env.PUBLIC_URL + '/resume.pdf', '_blank');
     };
    return (
        <div className="pb-5 pt-5 flex flex-row justify-between">
        <div className="flex flex-col group relative pr-20">
            <div className="border-x-4 flex flex-col items-start text-black text-3xl transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-2">
                <h1 className="pl-2">R</h1>
                <h1 className="pl-6">C</h1>
                <h1 className="pl-12 pr-2">S</h1>
            </div>
    
            <div className="border-y-4 border-orange-400 absolute flex flex-col items-start opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h1 className="text-orange-400 text-3xl font-bold">Radu</h1>
                <h1 className="text-orange-400 text-3xl font-bold">Constantin</h1>
                <h1 className="text-orange-400 text-3xl font-bold">Simuleac</h1>
            </div>
        </div>
    
        <HeaderButton title="About" onClick={handleClick} />
        <HeaderButton title="Skills" onClick={handleClick} />
        <HeaderButton title="Projects" onClick={handleClick} />
        <HeaderButton title="Contact" onClick={handleClick} />
        <HeaderButton title="Resume" onClick={handleResumeClick} />
    </div>
    
    );
    };
    export default Header;