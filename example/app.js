requirejs.config({

    paths: {
        "riot": "./lib/riot+compiler.min",
        "riotloader": "../riotloader"
    }
});

define([
    "riot",
    "riotloader!tags/todo"

], function(riot) {

    riot.mount('todo', {
        title: 'I want to behave!',
        items: [{
            title: 'Avoid excessive coffeine',
            done: true
        }, {
            title: 'Hidden item',
            hidden: true
        }, {
            title: 'Be less provocative'
        }, {
            title: 'Be nice to people'
        }]
    });

});
