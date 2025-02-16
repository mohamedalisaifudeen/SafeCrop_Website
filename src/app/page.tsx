import NavBar from "./Container/NavBar";
import { Header_new } from "./Container/Header";
import Advance from "./Container/AdvanceFeature";
import How from "./Container/How";
import Benifits from "./Container/Benifits";
import Footer from "./Container/footer";
import Last from "./Container/Last";
import Spec from "./Container/Specs";

export default function Home() {
  return (
    <div>
  <NavBar />
  <Header_new title="Innovative IoT Solution for Elephant Prevention" sub_title="Protect both wildlife and communities with smart technology"/>
  <Advance/>
  <How/>
<Benifits/>
<Spec/>
 
<Last/>
<Footer/>
  
      </div>
  );
}
