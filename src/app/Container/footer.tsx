"use client"; 
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { useState } from "react";
import { Console } from "console";
function Footer(){
    const [getEmail,setEmail]=useState("");
    return(
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <Image   width={50} height={50}  src={Logo} alt="EleGuard Logo" className=""/>
                        <span className="ml-2 text-xl font-bold">SafeCrop</span>
                    </div>
                    <p className="text-gray-400">Innovative IoT solutions for wildlife conservation</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#benefits" className="text-gray-400 hover:text-white">Benifits</a></li>
                        <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                        <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
         
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>missionsafecrop@gmail.com</li>
                        <li>+94 74 266 8716</li>
                        <li>435 Galle Rd,</li>
                        <li>Colombo 00300</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
                    <div className="flex">
                        <input type="email" placeholder="Enter your email" onChange={(e)=>{
                            setEmail(e.target.value);
                            
                        }} className="px-4 py-2 rounded-l-md w-full text-gray-900"/>
                        <button onClick={async()=>{
                           
                            if(!getEmail){
                                return alert("Enter a valid mail id")
                            }
                            try {
                                const response = await fetch("/api/subscribe", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({ email: getEmail  }),
                                });
                          
                                const data = await response.json();
                          
                                if (!response.ok) {
                                  throw new Error(data.error || "Subscription failed");
                                }
                          
                                alert("Subscription successful!");
                              } catch (error) {
                                alert("Failed to subscribe. Please try again.");
                              }

                        }} className="bg-green-700 px-4 py-2 rounded-r-md hover:bg-green-800">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 SafeCrop. All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;