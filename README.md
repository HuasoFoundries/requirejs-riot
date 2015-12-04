# requirejs-riot
Loads [riot](http://riotjs.com/) templates dinamically. They are precompiled at build time

## Installation

```sh
npm install requirejs-riot
```

## How to use it

You need to have `riot` on your deps, and request the tags prepending `riotloader!` to their url:

```js

	define([
    "riot",
    "riotloader!tags/timer",
    "riotloader!tags/app"

	], function(riot) {

	    riot.mount('timer', {
	        start: 0
	    });

	    riot.mount('app')
	    riot.route.start(true)

	});

```

This make the assumption that your tags have the `.tag` extension. 


## Example

Install [serve](https://www.npmjs.com/package/serve) or any other basic webserver

```sh
sudo npm install -g serve
cd example
serve .
```

Then point your browser to `http://localhost:3000/`

## Build

You need to install [riot](http://riotjs.com/)  and [requirejs](https://www.npmjs.com/package/requirejs) as node modules

```sh
npm install riot requirejs
```

When you build using `r.js`, the tag files will be inlined in your minified file. No extra request at all. You should do

```sh
./node_modules/.bin/r.js -o example/build.js
```

And then change the `data-main` attribute in `example/index.html` to point to `js-built/app` instead of `js/app`. Reload
and check the requests to verify all has been inlined properly.

