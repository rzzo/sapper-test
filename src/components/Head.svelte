<script>
  import { stores } from '@sapper/app';
  export let page = stores().page;
  export let title;
  if (!title) throw new Error('Missing title prop');
  export let description;
  if (!description) throw new Error('Missing description prop');
  export let keywords = ['Village of Dundee, NY', 'Dundee NY'];
  export let image = `https://${$page.host}/successkid.jpg`;
  export let follow = false;

  $: titleDerived = title + ' | Village of Dundee, NY';
  $: qs = Object.entries($page.query)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
  $: url = `https://${$page.host}${$page.path}${qs ? `?${qs}` : ''}`;
</script>

<svelte:head>
  <title>{titleDerived}</title>
  <meta name="DC.Title" content={titleDerived} />
  <meta name="url" content={url} />
  <meta name="description" content={description} />
  {#if keywords}
    <meta name="keywords" content={keywords.join(', ')} />
  {/if}
  <meta name="robots" content={follow ? 'index, follow' : 'noindex'} />
  <link rel="canonical" href={url} />
  <meta property="og:title" content={titleDerived} />
  <meta property="og:image" content={image} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta name="twitter:title" content={titleDerived} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:card" content={image} />
</svelte:head>
