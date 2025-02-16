"use client"; 

function Last(){
    return(
        <section className="bg-green-700 py-20">
      <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to protect your area?</h2>
          <button onClick={()=>{
            window.open("mailto:missionsafecrop@gmail.com");
          }} className="bg-white text-green-700 px-8 py-3 rounded-md hover:bg-gray-100">Contact Us Now</button>
      </div>
  </section>
    )
}

export default Last;