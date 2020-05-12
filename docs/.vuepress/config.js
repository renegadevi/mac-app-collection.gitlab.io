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
        logo: '/icon-colored.png',
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
                    { text: 'GitLab issues', link: 'https://gitlab.com/renegadevi/mac-app-collection/-/issues' },
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
