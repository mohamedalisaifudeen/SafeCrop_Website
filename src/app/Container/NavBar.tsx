"use client"; 
import Image from "next/image";
import Logo from "../../../public/Logo.png";
function NavBar( ){
    return(

<nav className="bg-white p-4 fixed w-full z-50">
<div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
    <Image   width={50} height={80}  src={Logo} alt="EleGuard Logo" className="h-12"/>
        <span className="ml-2 text-xl font-bold text-green-700">SafeCrop</span>
    </div>
    <div className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-600 hover:text-green-700">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-green-700">How It Works</a>
        <a href="#benefits" className="text-gray-600 hover:text-green-700">Benefits</a>
        <a href="#contact" className="text-gray-600 hover:text-green-700">Contact</a>
        <button onClick={()=>{
                    window.open("mailto:missionsafecrop@gmail.com");
                }} className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">Get Started</button>
    </div>
</div>
</nav>
    );
}


export default NavBar;