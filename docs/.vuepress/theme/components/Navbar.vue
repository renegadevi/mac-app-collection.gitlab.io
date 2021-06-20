<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <RouterLink
      :to="$localePath"
      class="home-link"
    >
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        v-if="$siteTitle"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
    </RouterLink>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <button style="width: 64px;" id="dark-mode-toggle" class="dark-mode-toggle" aria-label="toggle dark mode">
        <svg version="1.1" id="dark-mode-toggle-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
        <g id="icon">
            <path class="icon" d="M32,11.7c1.2,0,2.1-1,2.1-2.1V2.1C34.1,1,33.2,0,32,0c-1.2,0-2.1,1-2.1,2.1v7.5C29.9,10.8,30.8,11.7,32,11.7z"/>
            <path class="icon" d="M32,14.9c-9.4,0-17.1,7.6-17.1,17.1c0,9.4,7.6,17.1,17.1,17.1S49.1,41.4,49.1,32C49.1,22.6,41.4,14.9,32,14.9z M32,45.9
                V18.1c7.7,0,13.9,6.2,13.9,13.9C45.9,39.7,39.7,45.9,32,45.9z"/>
            <path class="icon" d="M32,52.3c-1.2,0-2.1,1-2.1,2.1v5.3v2.1c0,1.2,1,2.1,2.1,2.1c1.2,0,2.1-1,2.1-2.1v-2.1v-5.3C34.1,53.2,33.2,52.3,32,52.3z"
                />
            <path class="icon" d="M46.3,17.7c0.8,0.8,2.2,0.8,3,0l5.3-5.3c0.8-0.8,0.8-2.2,0-3c-0.8-0.8-2.2-0.8-3,0l-5.3,5.3C45.5,15.5,45.5,16.8,46.3,17.7
                L46.3,17.7z"/>
            <path class="icon" d="M17.7,46.3c-0.8-0.8-2.2-0.8-3,0l-5.3,5.3c-0.8,0.8-0.8,2.2,0,3c0.8,0.8,2.2,0.8,3,0l5.3-5.3
                C18.5,48.5,18.5,47.2,17.7,46.3L17.7,46.3z"/>
            <path class="icon" d="M14.7,17.7c0.8,0.8,2.2,0.8,3,0h0c0.8-0.8,0.8-2.2,0-3l-5.3-5.3c-0.8-0.8-2.2-0.8-3,0c-0.8,0.8-0.8,2.2,0,3L14.7,17.7z"/>
            <path class="icon" d="M49.3,46.3c-0.8-0.8-2.2-0.8-3,0h0c-0.8,0.8-0.8,2.2,0,3l5.3,5.3c0.8,0.8,2.2,0.8,3,0c0.8-0.8,0.8-2.2,0-3L49.3,46.3z"/>
            <path class="icon" d="M61.9,29.9h-7.5c-1.2,0-2.1,1-2.1,2.1c0,1.2,1,2.1,2.1,2.1h7.5c1.2,0,2.1-1,2.1-2.1C64,30.8,63,29.9,61.9,29.9z"/>
            <path class="icon" d="M11.7,32c0-1.2-1-2.1-2.1-2.1H2.1C1,29.9,0,30.8,0,32c0,1.2,1,2.1,2.1,2.1h7.5C10.8,34.1,11.7,33.2,11.7,32z"/>
        </g>
        </svg>
      </button>

      <div id="main-filter-dropdown" class="filter-dropdown">
        <button onclick="toggleFilters()" class="dropbtn">Filter&nbsp;&nbsp;<span class="arrow down"></span></button>
          <div id="filter-dropdown" class="filter-dropdown-content">
            <form class="filter">
              <label class="label" for="filter_paid"><div class="toggle"><input id="filter_paid" type="checkbox"><div class="indicator"></div></div><div class="label-text">Paid</div></label><br>
              <label class="label" for="filter_paid"><div class="toggle"><input id="filter_paid_inapp" type="checkbox"><div class="indicator"></div></div><div class="label-text">Paid In-app</div></label><br>
              <label class="label" for="filter_freemium"><div class="toggle"><input id="filter_freemium" type="checkbox"><div class="indicator"></div></div><div class="label-text">Freemium</div></label><br>
              <label class="label" for="filter_subscription"><div class="toggle"><input id="filter_subscription" type="checkbox"><div class="indicator"></div></div><div class="label-text">Subscription</div></label><br>
              <label class="label" for="filter_advertising"><div class="toggle"><input id="filter_advertising" type="checkbox"><div class="indicator"></div></div><div class="label-text">Advertising</div></label><br>
              <label class="label" for="filter_free"><div class="toggle"><input id="filter_free" type="checkbox"><div class="indicator"></div></div><div class="label-text">Free</div></label><br>
              <label class="label" for="filter_open_source"><div class="toggle"><input id="filter_open_source" type="checkbox"><div class="indicator"></div></div><div class="label-text">Open-Source</div></label><br>
              <label class="label" for="filter_closed_source"><div class="toggle"><input id="filter_closed_source" type="checkbox"><div class="indicator"></div></div><div class="label-text">Closed-Source</div></label>
          </form>
        </div>
    </div>

      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />

      <NavLinks class="can-hide" />
    </div>
  </header>
</template>


<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Navbar',

  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox
  },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
