import { component$ } from "@builder.io/qwik";
import { useCounter } from "./use-counter";

export default component$(() => {

  const count = useCounter();

  return (
    <button type="button" class="p-3 border" onClick$={() => count.value++}>
      Increment From Child {count.value}
    </button>
  );
});