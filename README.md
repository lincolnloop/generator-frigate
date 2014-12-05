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

You'll need `yo` - the scaffolding tool from `Yeoman` - installed:
```
npm install -g yo
```

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

Run `gulp` for asset watching/compiling with LiveReload support (and the optional static server) and `gulp build --production` for a production-ready build. Once `gulp` is running, you can access your project at [http://localhost:8000](http://localhost:8000).

## Documentation

Docs are generated using Sphinx.

```
pip install Sphinx
cd <project_root>/docs && make html
```

You can then open *file:///<project_root>/docs/_build/html/index.html* in a browser.


Alternative: run the following then browse to *http://localhost:8000*.
```
cd docs/_build_html && python -m SimpleHTTPServer 8000 &
```