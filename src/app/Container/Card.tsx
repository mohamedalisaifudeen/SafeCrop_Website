function Card(Props:{txt1:string,txt2:string}){
    return (
        <div className="text-center p-6 rounded-xl shadow-xl">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">{Props.txt1}</h3>
        <p className="text-gray-600">{Props.txt2}</p>
    </div>
    )

}

export default Card;