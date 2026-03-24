import State from "../State/State";
import states from "../../../_lib/data-states";
import Map from "../../MapStates/Map/Map";

export default function States() {
  return (
    <section>
      {states.map((state, index) => (
        <>
          <State key={state.name} data={state} reverse={index % 2 === 1} />
          <Map key={index} data={state} reverse={index % 2 === 1}></Map>
        </>
      ))}
    </section>
  );
}
