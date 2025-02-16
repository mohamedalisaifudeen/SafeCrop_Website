function HowCard(Props:{txt1:string,txt2:string}){
    return(
        <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-700 rounded-full flex items-center justify-center text-white">4</div>
        <h3 className="text-xl font-semibold mb-2">{Props.txt1}</h3>
        <p className="text-gray-600">{Props.txt2}</p>
    </div>
    )
}

export default HowCard;