import Benifit_card from "./Benifit_card"
function Benifits(){
    return (
        <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
                <Benifit_card logo="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" txt1="Wildlife Protection" txt2="Non-lethal deterrent system that protects elephants"/>
                <Benifit_card logo="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" txt1="Community Safety" txt2="Protect local communities and their livelihoods"/>

                <Benifit_card logo="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" txt1="Cost-effective" txt2="Affordable solution with minimal maintenance"/>
            </div>
        </div>
    </section>
    )
}

export default Benifits