<script>
  import "../app.css";
  import { onMount } from "svelte";
  import {base} from "$app/paths";

  export let data;
</script>
{#await import("$lib/fluid")}
{:then}
  <script>
    window.setupFluid();
  </script>
{/await}
<div class="relative overflow-clip w-screen h-screen">
  <div id="fluid-wrapper" class="absolute w-[110vw] h-[110vh] overflow-clip top-[-5vh] left-[-5vw]">
  </div>
  <div class="absolute w-screen h-screen overflow-clip">
    <a href={"/"} class="font-rubik text-white opacity-65 text-[8dvw] absolute bottom-0 right-[2dvw] z-50"><span class="mr-[2dvh]">Aaron</span>Santiago</a>
    {#key data.path}
      <slot />
    {/key}
  </div>
</div>