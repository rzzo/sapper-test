<script>
  export let segment;
  export let showHome = false;
</script>

<style>
  /* nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }


  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
	} */
</style>

<nav>
  {#if showHome}
    <a aria-current={segment === undefined ? 'page' : undefined} href=".">
      Home
    </a>
  {/if}

  <!-- for the news link, we're using rel=prefetch so that Sapper prefetches the news data when we hover over the link or tap it on a touchscreen -->

  <a
    rel="prefetch"
    aria-current={segment === 'news' ? 'page' : undefined}
    href="news">
    News
  </a>

  <a
    aria-current={segment === 'documents' ? 'page' : undefined}
    href="documents">
    Forms & Permits
  </a>

  <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
    About
  </a>

</nav>
