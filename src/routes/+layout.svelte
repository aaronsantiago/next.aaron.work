<script>
  import "../app.css";
  import "$lib/fluid"
  import { onMount } from "svelte";


  onMount(() => {
    window.setupFluid();
  });
</script>

<div id="fluid-wrapper" class="absolute w-[110vw] h-[110vh] overflow-hidden top-[-5vh] left-[-5vw]">
  <div class="absolute w-screen h-screen overflow-hidden top-[5vh] left-[5vw]">
    <slot />
  </div>
</div>