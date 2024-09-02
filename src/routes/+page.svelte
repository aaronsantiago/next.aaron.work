<script>
  export let data;
</script>

<h1>projects</h1>

<ul>
  {#each data.projects as project}
    <li>
      <a href={project.path}>
        {project.meta.title}
      </a>
    </li>
  {/each}
</ul>