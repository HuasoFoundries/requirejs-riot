({

    baseUrl: ".",

    paths: {
        "riot": "./js/lib/riot",
        "riotloader": "./js/lib/riotloader",
        "tags":"./js/tags",
        "app":"js/app"
        
    },

    normalizeDirDefines: "all",
    preserveLicenseComments: false,
    stubModules: ['riotloader'],

    name:"app",

    out: "js-built/app.js",
    optimize: 'uglify2',
    logLevel: 0,
    useStrict: true

})
