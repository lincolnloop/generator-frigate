****************************
Getting Started With Frigate
****************************

Use this guide to understand what Frigate provides out-of-the-box and how to work with the tools and conventions.

Generated Project Layout
------------------------

After running `yo frigate` and completing the helper wizard, frigate will generate a project structure and install some tools and dependencies.

Config files:

* package.json
* bs.config.js
* karma.conf.js
* .babelrc
* .gitignore

Directories:

* client
* styleguide
* templates

Support directories:

* build
* node_modules


Makefile
----

We're using make to as a way to run and integrate the different tasks and configuration of the development workflow.



Dependencies
---------------

Frigate depends on watchman (https://facebook.github.io/watchman/docs/install.html) to watch for file changes and run the build automatically.


.. _primary_tasks:

Primary Tasks
~~~~~~~~~~~~~

Usually you'll work with a few primary tasks that will take of most of your workflow needs without much hassle.

**build**

The ``make build`` task preps your project for serving. It cleans the build directory, processes Sass into CSS, and moves static files (css, images, js and templates) to the build directory. After running ``make build``, your project should be ready for serving by a web server configured to serve content from the project build directory.

**watch**

The ``make watch`` task watches your project's files for changes and when a change is detected, it performs steps nearly identical to ``make build``. The difference is that ``make watch`` does not clean the build directory each time. ``make watch`` also provides a few other conveniences. If you selected a Connect server during project initialization, it starts a local server configured to server your built assets. It also starts LiveReload so that changes are reflected in open browsers without needing refresh. Finally, it also performs a Javascript linting operation and reports warnings to the console. With ``make watch`` you can quickly iterate changes in your code without having to continually run preprocessing/build steps in the console or manually refresh one or more browser windows.

Most of the time, you'll simply run ``make watch`` and then focus on your work.


Secondary Tasks
~~~~~~~~~~~~~~~

These are tasks that compose ``make build`` and ``make watch``, but they can run individually if needed.

* clean
* assets
* css
* js
* help


BrowserSync
------------

 `BrowserSync`_ is a tool that keeps multiple browsers across multiple devices in sync while you develop your project. All connected clients to your project will update automatically whenever project files change.

  .. _BrowserSync: http://www.browsersync.io/


Connecting Multiple Devices
~~~~~~~~~~~~~~~~~~~~~~~~~~~

When you run ``make`` (or ``make watch``), you should see a line in the startup output similar to::

  [BS] External URL: http://192.168.1.2:3000

Any browser, emulator, or device that can connect to that address on your local network will stay updated automatically as you make changes to files in your project.*

*Browser behaviors can differ; mobile browers might require manual refresh after device goes into power saving mode.


Working with Sass
-----------------

Building the Styleguide
-----------------------

Frigate uses a Ruby tool called `hologram`_ for building a style guide using comments in the source files. Frigate includes a Gemfile and a hologram configuration file.

If you use Ruby `bundler`_, try::

    bundle
    bundle exec hologram

Otherwise::

    gem install hologram
    hologram

After ``hologram`` runs, you should have an *index.html* file in your styleguide directory.


.. _hologram: http://trulia.github.io/hologram/
.. _bundler: http://bundler.io/


Configuration and Overriding Defaults
-------------------------------------

Using Frigate in Your Traditional Backend Project
-------------------------------------------------

Comparison with Other Frameworks
--------------------------------
