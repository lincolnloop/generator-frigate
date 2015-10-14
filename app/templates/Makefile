NPM_BIN := $(shell pwd)/node_modules/.bin

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

all: js
