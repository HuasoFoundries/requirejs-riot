requirejs.config({

    paths: {
        "riot": "./lib/riot+compiler.min",
        "riotloader": "./lib/riotloader",
        "tags":"./tags"
        
    }
});

define("app",[
    "riot",
    "riotloader!tags/timer",
    "riotloader!tags/app"

], function(riot) {

    riot.mount('timer', {
        start: 0
    });


    riot.compile(function() {
        riot.mount('app')
        riot.route.start(true)
    })

});
