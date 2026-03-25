import State from "../State/State";
import states from "../../../_lib/data-states";
import Map from "../../MapStates/Map/Map";

export default function States() {
  return (
    <section>
      {states.map((state, index) => (
        <div key={state.name}>
          <State data={state} reverse={index % 2 === 1} />
          <Map data={state} reverse={index % 2 === 1} />
        </div>
      ))}
    </section>
  );
}
