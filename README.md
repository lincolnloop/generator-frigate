```
███████╗██████╗ ██╗ ██████╗  █████╗ ████████╗███████╗
██╔════╝██╔══██╗██║██╔════╝ ██╔══██╗╚══██╔══╝██╔════╝
█████╗  ██████╔╝██║██║  ███╗███████║   ██║   █████╗  
██╔══╝  ██╔══██╗██║██║   ██║██╔══██║   ██║   ██╔══╝  
██║     ██║  ██║██║╚██████╔╝██║  ██║   ██║   ███████╗
╚═╝     ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
```

> Yeoman generator for front-end developers

## Features

* Application structure and setup that works for single page apps and web sites.
* Full featured `Gulp` setup with:
  * Browserify
  * SASS and CSS auto-prefixing
  * CSS and JavaScript minification
  * LiveReload
  * Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Built-in static server (optional)


## Usage

Install `generator-frigate`:
```
npm install -g generator-frigate
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run:
```
yo frigate
```

Run `gulp` for asset watching/compiling with LiveReload support (and the optional static server) and `gulp build --production` for a production-ready build
