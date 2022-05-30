import FixedFee from "./FixedFee"
import GreenCamping from "./GreenCamping"
import CrewSetup from "./CrewSetup"
export default function CampingOptions(props) {
  return (
    <section className="choose_camp">
      <h2>Select Camping Options</h2>
      <a href="#/">← Back</a>
      <form>
        <FixedFee />
        <GreenCamping {...props}/>
        <CrewSetup {...props}/>
        <button className="secondary">Back</button>
        <button className="primary">Continue to payment</button>
      </form>
    </section>
  );
}

