<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<style lang="scss">
  .logo {
    h1 {
      font-size: 1.5em;
    }
  }
</style>

<header>
  <a class="logo" href=".">
    <h1>Village of Dundee</h1>
  </a>

  <Nav {segment} />

</header>
