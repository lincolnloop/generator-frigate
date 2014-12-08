****************************
Getting Started With Frigate
****************************

Use this guide to understand what Frigate provides out-of-the-box and how to work with the tools and conventions.

Generated Project Layout
------------------------

After running `yo frigate` and completing the helper wizard, frigate will generate a project structure and install some tools and dependencies.

Config files:

* Gemfile
* Gemfile.lock
* gulpfile.js
* hologram_config.yml
* package.json
* .gitignore

Directories:

* client
* templates

Support directories:

* build
* gulp
* node_modules


Gulp
----

Gulp is a Javascript-based build system. It lets us create tasks and tools for managing different aspects of the development workflow.


.. _gulp_primary_tasks:

Primary Tasks
~~~~~~~~~~~~~

Usually you'll work with a few primary tasks that will take of most of your workflow needs without much hassle.

**build**

The ``build`` task preps your project for serving. It cleans the build directory, processes SASS into CSS, and moves static files (css, images, js and templates) to the build directory. After running ``build``, your project should be ready for serving by a web server configured to serve content from the project build directory.

**watch**

The ``watch`` task watches your project's files for changes and when a change is detected, it performs steps nearly identical to ``build``. The difference is that the ``watch`` does not clean the build directory each time. ``watch`` also provides a few other conveniences. If you selected a Connect server during project initialization, it starts a local server configured to server your built assets. It also starts LiveReload so that changes are reflected in open browsers without needing refresh. Finally, it also performs a Javascript linting operation and reports warnings to the console. With ``watch`` you can quickly iterate changes in your code without having to continually run preprocessing/build steps in the console or manually refresh one or more browser windows.

Most of the time, you'll simply run the ``watch`` task and then focus on your work. Gulp also supports the idea of a default task, and Frigate designates ``watch`` as the default task. This means you can simply run ``gulp`` and then start working in your code.

**Default Task (watch)**

Occasionally it may seem that updates to your code are no longer being reflected in the browser. Sometimes a saved change can cause some part of the build process to fail, and subsequently the gulp process will crash. For example, if browserify can't resolve something this can happen. Check your console to see where in your code things are causing problems, fix, and restart gulp.


Secondary Tasks
~~~~~~~~~~~~~~~

These are tasks that compose ``build`` and ``watch``, but they can run individually if needed.

* clean
* assets
* templates
* sass
* browserify
* lint:js
* optimize


BrowserSync
------------

 `BrowserSync`_ is a tool that keeps multiple browsers across multiple devices in sync while you develop your project. Frigate's Gulp configuration manages BrowserSync for all your project files. All connected clients to your project will update automatically whenever project files change.

  .. _BrowserSync: http://www.browsersync.io/


Connecting Multiple Devices
~~~~~~~~~~~~~~~~~~~~~~~~~~~

When you run ``gulp`` (or ``gulp watch``), you should see a line in the startup output similar to::

  [BS] External URL: http://192.168.1.2:3000

Any browser, emulator, or device that can connect to that address on your local network will stay updated automatically as you make changes to files in your project.*

*Browser behaviors can differ; mobile browers might require manual refresh after device goes into power saving mode.


Working with SASS
-----------------

Building the Styleguide
-----------------------

Configuration and Overriding Defaults
-------------------------------------

Using Frigate in Your Traditional Backend Project
-------------------------------------------------

Comparison with Other Frameworks
--------------------------------
