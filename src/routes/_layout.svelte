<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`http://localhost:3000/footer.json`);
    const footerData = await res.json();
    return { footerData };
  }
</script>

<script>
  // import Nav from '../components/Nav.svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  export let footerData;
  export let segment;
</script>

<style lang="scss" global>
  @import '../styles/global.scss';
</style>

<Header {segment} />

<main class="home-layout">
  <slot />
</main>

<Footer {footerData} />
