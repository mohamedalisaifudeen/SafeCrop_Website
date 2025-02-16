function Spec_Card(Props:{logo:string,txt1:string,txt2:string}){
    return (
        <div className="flex items-start">
        <svg className="w-6 h-6 text-green-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={Props.logo}></path>
        </svg>
        <div className="ml-4">
            <h3 className="text-lg font-semibold">{Props.txt1}</h3>
            <p className="text-gray-600">{Props.txt2}</p>
        </div>
    </div>
    )
}

export default Spec_Card;