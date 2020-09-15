<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`http://localhost:3000/footer.json`);
    const setupData = await res.json();
    const rpostsRes = await this.fetch(
      `http://localhost:3000/news/recentPosts.json`
    );
    const posts = await rpostsRes.json();
    return { setupData, posts };
  }
</script>

<script>
  import Head from '../components/Head.svelte';
  import News from '../components/RecentNews.svelte';
  import { fadeIn, fadeOut } from '../animate';
  import Image from 'svelte-image';

  export let setupData;
  export let posts;
</script>

<style lang="scss">
  .hero-banner {
    height: 425px;
    display: flex;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: center top;

    h1,
    h3 {
      color: white;
      text-shadow: 0 1px 0 black;
    }

    .welcome-wrapper {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }
  }

  section {
    padding: var(--containerPadding);

    h2 {
      margin-top: 0;
    }

    .read-all {
      text-align: center;
    }
  }
</style>

<Head
  title="Welcome to the {setupData.municipality}
  {setupData.state}!"
  description="The official website for the {setupData.municipality}
  {setupData.state}" />

<div
  class="hero-banner"
  style=" background-image: linear-gradient( rgba(0, 0, 0, 0.08), rgba(0, 0, 0,
  0.08) ), url('{setupData.homeGroup.heroGroup.hero}');">
  <div class="welcome-wrapper">
    <h3>Welcome to</h3>
    <h1>{setupData.municipality}</h1>
  </div>
</div>

<section class="news">
  <h2>The Latest</h2>
  <div class="flex-grid">
    <News {posts} />
  </div>
  <div class="read-all">
    <a class="cta" href="news" rel="prefetch">Read All</a>
  </div>
</section>
