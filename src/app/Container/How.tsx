import HowCard from "./HowCard";
function How(){
    return(
        <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <HowCard txt1="Installation" txt2="Professional setup of smart fence system"/>
                <HowCard txt1="Monitoring" txt2="Continuous voltage monitoring"/>
                <HowCard txt1="Detection" txt2="Instant breach detection"/>
                <HowCard txt1="Alert" txt2="Real-time mobile notifications"/>
            </div>
        </div>
    </section>
    )
}

export default How;