import Card from "./Card";
function Advance(){
    return(
        <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Features for Maximum Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                <Card txt1="Real-time Monitoring" txt2='24/7 fence monitoring with instant alerts and voltage drop detection'/>
                <Card txt1="Mobile Integration" txt2='Get instant notifications through our dedicated Flutter mobile app'/>
                <Card txt1="Smart Detection" txt2='Advanced sensors with precise elephant movement detection'/>

            </div>
        </div>
    </section>
    )
}

export default Advance;