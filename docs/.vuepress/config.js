module.exports = {
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/last-updated',
        '@vuepress/nprogress'
    ],
    title: 'Mac App Collection',
    description: 'Find hidden gems to improve your Mac.',
    base: '/mac-app-collection/',
    dest: 'public',
    head: [
        [ "link", { rel: "stylesheet", href: "extra.css" }, ],
        [ "link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap" }, ],
        [ "script", { src: "sorttable.js" }, ],
        ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
    ],
    themeConfig: {
        navbar: true,
        search: true,
        searchMaxSuggestions: 10,
        searchPlaceholder: 'Search',
        logo: '/icon-colored.png'
    }
}
