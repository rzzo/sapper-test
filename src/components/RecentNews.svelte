<script>
  const today = new Date();
  const year = today.getMonth();

  function createDate(date) {
    const o = { month: 'long', day: 'numeric', year: 'numeric' };
    // const newDate = new Date(date);
    const d = new Date(date);
    const newDate = new Intl.DateTimeFormat('en-US', o).format(d);

    return newDate;
  }

  export let posts;
</script>

<style lang="scss">
  h3 {
    // color: var(--primary);
    margin-top: 0;
  }
  h5 {
    font-size: 0.85em;
    margin-top: 0;
  }
  .post {
    background-color: white;
    box-shadow: var(--level-4);
    border-radius: 12px;
    margin: 1em;
    padding: 1em;

    .post-link {
      text-decoration: none;
      color: var(--primary);
    }
  }
</style>

{#each posts as post}
  <div class="post col">
    <a class="post-link" rel="prefetch" href="news/{post.slug}">
      <h3>{post.title}</h3>
    </a>

    <h5>{createDate(post.date)}</h5>
    <article>
      <p>{post.teaser}</p>
    </article>

    <a class="button small" rel="prefetch" href="news/{post.slug}">Read More</a>
  </div>
{/each}
