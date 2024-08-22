export default {
    title: 'My Fancy Title',
    description: 'My Fancy Description',
    lang: 'en-CA',
    base: '/',
    srcDir: '../docs',
    outDir: '../vite-docs',
    ignoreDeadLinks: true, // turn off prior to release
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // --- Page Header ---

        logo: '/float.jpg',
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Internal Fancy Link',
                link: 'overview'
            },
            {
                text: 'External Fancy Link',
                link: 'https://github.com'
            },
            {
                text: 'Releases',
                link: 'https://github.com/org/repo/releases'
            }
        ],
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/org/repo'
            }
        ],

        // --- Page Footer ---

        lastUpdated: false,
        lastUpdatedText: 'Last Updated',
        footer: {
            message: 'Footer Message',
            copyright: 'Footer copywrite - Created with Vitepress'
        },

        // --- Left Sidebar ---

        sidebar: [
            {
                text: 'Level 1 A',
                collapsed: false,
                items: [
                    { text: 'A One', link: '/a-page' },
                    { text: 'A Two', link: '/subfolder1/another-page' }
                ]
            },
            {
                text: 'Level 1 B',
                collapsed: false,
                items: [
                    { text: 'B One', link: '/a-page' },
                    {
                        text: 'B Two',
                        collapsed: false,
                        items: [
                            { text: 'B Sub One', link: '/subfolder1/another-page' },
                            {
                                text: 'B Sub Two',
                                collapsed: true,
                                items: [
                                    { text: 'B Collapsed One', link: '/a-page' },
                                    { text: 'B Collapsed Two', link: '/subfolder1/another-page' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Level 1 C',
                collapsed: false,
                items: [{ text: 'C One', link: '/a-page' }]
            },
            {
                text: 'Level 1 D',
                collapsed: false,
                items: [{ text: 'D One', link: '/subfolder1/another-page' }]
            }
        ],

        // --- General ---
        externalLinkIcon: true
    }
};
