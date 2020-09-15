<script>
  import facebook from '../../static/footer-icons/facebook.svg';
  import instagram from '../../static/footer-icons/instagram.svg';
  import twitter from '../../static/footer-icons/twitter.svg';
  import youtube from '../../static/footer-icons/youtube.svg';
  import phone from '../../static/footer-icons/phone.svg';
  import mail from '../../static/footer-icons/mail.svg';
  import Nav from '../components/Nav.svelte';

  const today = new Date();
  const year = today.getFullYear();
  let showHome = true;

  export let footerData;
</script>

<style lang="scss">

</style>

<footer>
  <div class="footer-left">
    <div class="contact-info">
      <address>
        <div class="vcard">
          <h5 class="org">{footerData.municipality}</h5>
          <div class="adr">
            <div class="street-address">
              {footerData.homeGroup.addressGroup.address}
            </div>
            <span class="locality">
              {footerData.homeGroup.addressGroup.city}
            </span>
            ,
            <span class="region">
              {footerData.homeGroup.addressGroup.state}
            </span>
            ,
            <span class="postal-code">
              {footerData.homeGroup.addressGroup.zipcode}
            </span>
            <span class="country-name">United States of America</span>
          </div>
        </div>
      </address>
    </div>

  </div>

  <div class="footer-center">
    <Nav {showHome} />
    <div class="social-media">
      <nav>
        {#if footerData.facebook}
          <a
            class="facebook"
            target="_blank"
            rel="external"
            href={footerData.facebook}>
            {@html facebook}
          </a>
        {/if}
        {#if footerData.twitter}
          <a
            class="twitter"
            target="_blank"
            rel="external"
            href={footerData.twitter}>
            {@html twitter}
          </a>
        {/if}
        {#if footerData.instagram}
          <a
            class="instagram"
            target="_blank"
            rel="external"
            href={footerData.instagram}>
            {@html instagram}
          </a>
        {/if}
        {#if footerData.youtube}
          <a
            class="youtube"
            target="_blank"
            rel="external"
            href={footerData.youtube}>
            {@html youtube}
          </a>
        {/if}
      </nav>
    </div>
  </div>

  <div class="footer-right">
    <div class="contact">
      {#if footerData.email}
        <div class="email">
          {@html mail}
          <a target="_blank" rel="external" href="mailto:{footerData.email}">
            {footerData.email}
          </a>
        </div>
      {/if}

      {#if footerData.phone}
        <div class="phone">
          {@html phone}
          <a target="_blank" rel="external" href="tel:{footerData.phone}">
            {footerData.phone}
          </a>
        </div>
      {/if}
      {#if footerData.fax}
        <div class="fax">
          {@html phone}
          <a target="_blank" rel="external" href="tel:{footerData.fax}">
            {footerData.fax}
          </a>
        </div>
      {/if}
    </div>
  </div>
</footer>
<div class="copy-right text_small">
  &copy; Copyright {year}. All rights reserved.
</div>
