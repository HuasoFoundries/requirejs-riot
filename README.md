# requirejs-riot
Loads [riot](http://riotjs.com/) templates dinamically. They are precompiled at build time

## Installation

```sh
npm install requirejs-riot
```

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

And then change the `main-data` attribute in `example/index.html` to point to `js-built/app` instead of `js/app`. Reload
and check the requests to verify all has been inlined properly.

