import State from "../State/State";
import states from "../../../_lib/data-states";

export default function States() {
  return (
    <section>
      {states.map((state, index) => (
        <State key={state.name} data={state} reverse={index % 2 === 1} />
      ))}
    </section>
  );
}
