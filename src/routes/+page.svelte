<script>
  import { base } from "$app/paths";
  export let data;
</script>

<h1>projects</h1>

<ul>
  {#each data.projects as project}
    <li>
      <a href={base+ project.path}>
        {project.meta.title}
      </a>
    </li>
  {/each}
</ul>