import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Child from "~/components/child";
import { useCounter } from "~/components/use-counter";

export default component$(() => {

  const count = useCounter();

  return (
    <div class="flex items-center justify-center flex-col gap-5">
      <h1 class="text-3xl">Qwik useState</h1>
      <button type="button" class="p-3 border" onClick$={() => count.value++}>
        Increment From Parent {count.value}
      </button>
      <Child />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
