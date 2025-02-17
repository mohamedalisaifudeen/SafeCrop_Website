import HowCard from "./HowCard";
function How(){
    return(
        <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <HowCard txt3="1" txt1="Installation" txt2="Professional setup of smart fence system"/>
                <HowCard txt3="2" txt1="Monitoring" txt2="Continuous voltage monitoring"/>
                <HowCard txt3="3" txt1="Detection" txt2="Instant breach detection"/>
                <HowCard txt3="4" txt1="Alert" txt2="Real-time mobile notifications"/>
            </div>
        </div>
    </section>
    )
}

export default How;