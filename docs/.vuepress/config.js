module.exports = {
    extend: '@vuepress/theme-default',
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        '@vuepress/last-updated'
    ],
    title: 'Mac App Collection',
    description: 'Find hidden gems to improve your Mac.',
    base: '/mac-app-collection/',
    dest: 'public',
    head: [
        // Styling
        [ "link",   { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap" }, ],
        [ "link",   { rel: "stylesheet", href: "/css/neumorphism.css" }, ],
        [ "link",   { rel: "stylesheet", href: "/css/neumorphism_dark-mode.css" }, ],

        // Favicon
        [ "link",   { rel: "shortcut icon", href: "/favicon.ico" }],

        // Javascript
        [ "script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" }],
        [ "script", { src: "/js/dark-mode-filters.js" }, ],
        [ "script", { src: "/js/sorttable.js" },],

        // SEO
        ['meta', { name: "title", content: "Mac App Collection" },],
        ['meta', { name: "description", content: "Find hidden gems to improve your Mac" },],

        ['meta', { property: "og:type", content: "website" },],
        ['meta', { property: "og:url", content: "https://renegadevi.gitlab.io/mac-app-collection/" },],
        ['meta', { property: "og:title", content: "Mac App Collection" },],
        ['meta', { property: "og:description", content: "Find hidden gems to improve your Mac." },],
        ['meta', { property: "og:image", content: "https://renegadevi.gitlab.io/mac-app-collection/img/icon-1200x1200.png" }, ],

        ['meta', { property: "twitter:card" ,content: "summary_large_image" },],
        ['meta', { property: "twitter:url", content: "https://renegadevi.gitlab.io/mac-app-collection/" },],
        ['meta', { property: "twitter:title", content: "Mac App Collection" },],
        ['meta', { property: "twitter:description", content: "Find hidden gems to improve your Mac." },],
        ['meta', { property: "twitter:image", content: "https://renegadevi.gitlab.io/mac-app-collection/img/icon-1200x1200.png" },],


    ],
    themeConfig: {
        navbar: true,
        search: true,
        searchMaxSuggestions: 10,
        searchPlaceholder: 'Search',
        logo: '/img/icon-nocircle.png',
        lastUpdated: 'Last updated',
        activeHeaderLinks: true,
        nextLinks: true,
        prevLinks: true,
        docsDir: 'docs',
        repo: 'https://gitlab.com/renegadevi/mac-app-collection',
        repoLabel: 'GitLab',
        editLinks: true,
        editLinkText: 'Suggest a change',
        nav: [
            {
                text: 'Feedback',
                items: [
                    { text: 'Suggest an app', link: 'https://gitlab.com/renegadevi/mac-app-collection/-/issues/new' },
                    { text: 'Email', link: 'mailto:philip.andersen@codeofmagi.net?subject=Mac%20App%20Collection: Feedback' }
                ]
            },
        ],
        displayAllHeaders: false,
        sidebar: {
            '/apps/': [
                '',
                'audio',
                'backup-and-data-recovery',
                'communication',
                'customization',
                'developer-tools',
                'graphics-and-design',
                'internet',
                'lifestyle',
                'mobile',
                'productivity',
                'security',
                'system',
                'terminal',
                'utilities',
                'video'
            ],

            // fallback
            '/': [
                '',
            ]
        },
        sidebarDepth: 1
    }
}
