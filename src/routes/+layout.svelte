<script>
  import "../app.css";
  import { onMount } from "svelte";
  import {base} from "$app/paths";
</script>
{#await import("$lib/fluid")}
{:then}
  <script>
    window.setupFluid();
  </script>
{/await}
<div id="fluid-wrapper" class="absolute w-[110vw] h-[110vh] overflow-hidden top-[-5vh] left-[-5vw]">
  <div class="absolute w-screen h-screen overflow-hidden top-[5vh] left-[5vw]">
    <a href={base} class="font-rubik text-white opacity-65 text-[8dvw] absolute bottom-0 right-[2dvw]"><span class="mr-[2dvh]">Aaron</span>Santiago</a>
    <slot />
  </div>
</div>