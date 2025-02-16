import Image from "next/image";
import Tree from "../../../public/tree.jpg";
import Spec_Card from "./Spec_Card";

function Spec(){
    return(
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <Image src={Tree} width={500} height={800} alt="Technical Setup" className="rounded-lg shadow-lg "/>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
                    <div className="space-y-6">

                        <Spec_Card logo="M13 10V3L4 14h7v7l9-11h-7z" txt1="Voltage Monitoring" txt2="Continuous monitoring with millisecond precision"/>
                        <Spec_Card logo="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" txt1="Response Time" txt2="Under 1 second alert transmission"/>
                        <Spec_Card logo="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" txt1="Mobile Integration" txt2="iOS and Android app support"/>
                
                        <Spec_Card logo="M13 10V3L4 14h7v7l9-11h-7z" txt1="Battery Life" txt2="Up to 2 years with solar charging option"/>

        
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    )
}

export default Spec;