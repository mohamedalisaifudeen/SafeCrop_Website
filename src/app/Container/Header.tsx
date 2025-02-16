"use client"; 
import Image from "next/image";
import Elephant from "../../../public/Elephant.jpg";
function Header_new(Props:{title:string,sub_title:string}){
    return(
        <section className="relative h-screen">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
            <Image   width={500} height={200}  src={Elephant} alt="Elephant" className="w-full h-full object-cover"/>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl font-bold mb-6">{Props.title}</h1>
            <p className="text-xl mb-8">{Props.sub_title}</p>
            <div className="space-x-4">
                <button onClick={()=>{
                    window.open("https://www.youtube.com/watch?v=B3_dXOMcRqM");
                }} className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100">Watch Demo</button>
                <button onClick={()=>{
                    window.open("mailto:missionsafecrop@gmail.com");
                }} className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800">Request Quote</button>
            </div>
        </div>
    </section>
    )
}

export {Header_new};