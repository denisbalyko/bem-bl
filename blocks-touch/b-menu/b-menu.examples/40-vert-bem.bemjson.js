({
    block: 'b-page',
    title: 'заголовок',
    head: [
        {
            elem: 'css',
            url: '_40-vert-bem.css'
        },
        {
            elem: 'css',
            ie: true,
            url: '_40-vert-bem.ie.css'
        },
        {
            block: 'i-jquery',
            mods: {version: '1.8.3'}
        },
        {
            elem: 'js',
            url: '_40-vert-bem.js'
        }
    ],
    content: {
        block: 'b-menu',
        mods: {
            layout: 'vert'
        },
        content: [
            {
                elem: 'item',
                elemMods: {
                    state: 'current'
                },
                content: 'Главная'
            },{
                elem: 'item',
                content: {
                    block: 'b-link',
                    url: '#',
                    content: 'Продукты'
                }
            },{
                elem: 'item',
                content: {
                    block: 'b-link',
                    url: '#',
                    content: 'Поддержка'
                }
            },{
                elem: 'item',
                content: {
                    block: 'b-link',
                    url: '#',
                    content: 'О компании'
                }
            }
        ]
    }
})
