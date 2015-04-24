NPM_BIN := $(shell pwd)/node_modules/.bin
#
# ASSETS
# ======

build/assets:
	# Just symlink them. No processing necessary
	mkdir -p build && ln -s ../client/assets $@

assets: build/assets


#
# CSS
# ====

build/css:
	# Make build directory
	mkdir -p $@

css: build/css
	$(NPM_BIN)/node-sass client/scss --output-style compressed -o build/css \
		| $(NPM_BIN)/autoprefixer -b "last 2 versions"

#
# JAVASCRIPT
# ==========

build/js:
	mkdir -p $@
build/js/%.js: build/js
	# js -> browserify -> uglify
	$(NPM_BIN)/browserify client/js/$*.js \
	| $(NPM_BIN)/uglifyjs -m -c warnings=false > build/js/$*.js
# turn client/js/*.js into build/js/*.js
js: $(patsubst client/js/%.js,build/js/%.js,$(wildcard client/js/*.js))


clean:
	rm -rf build/*

all: assets css js

.PHONY: all clean css assets
