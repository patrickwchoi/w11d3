import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";

// Fill in the two props, value and onAfterChange, which are passed into ReactSlider.
// value should be set to the temperature value in the ClimateContext.
// In the onAfterChange function val should be set as the new temperature value in the context.

function Thermometer() {
  const { temp, setTemp } = useClimate();
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {'x'}°F</div>
      <ReactSlider
        value={temp}
        onAfterChange={(val) => {setTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;