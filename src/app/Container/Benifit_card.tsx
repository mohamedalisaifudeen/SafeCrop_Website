function Benifit_card(Props:{logo:string,txt1:string,txt2:string}){
    return (
        <div className="text-center p-6">
        <div className="w-16 h-16 mx-auto mb-4 ">
            <svg className="text-green-700" fill="none"  stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={Props.logo}></path>
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">{Props.txt1}</h3>
        <p className="text-gray-600">{Props.txt2}</p>
    </div>
    )
}

export default Benifit_card;