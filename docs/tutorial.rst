*******************************************************************
Introductory Tutorial: Understanding the Frigate Tools and Workflow
*******************************************************************

The purpose of this tutorial is to become familiar with how the Frigate tools work as you add to and modify your project. Frigate configures Gulp to continuously build your project code files and assets; changes you make should be reflected quickly into any browsers or devices you have that are connected to your project's local development URL.


Create a new Frigate project. If you already have one, skip this step::

    mkdir my_new_project && cd $_
    yo frigate

Start gulp::

    #
    # Builds site and starts local web server on port 8000
    #
    gulp

    #
    # Example of overriding web server port
    #
    PORT=9900 gulp

You should see some output in the console showing the various :ref:`Frigate build tasks <gulp_primary_tasks>` executing, and web and BrowserSync services starting. Your default browser should open a tab at *localhost:<PORT>* for you. You can open another tab (`http://localhost:3000`_) to see BrowserSync update in multiple locations.

.. _http://localhost:3000: http://localhost:3000)

If you'd like to connect mobile devices at this time, refer to the console output from when Gulp started up. You should see a line containing ``External URL similar to``::

  [BS] External URL: http://192.168.1.2:3000

Enter this URL into other devices attached to the local network you'd like to test on, and watch them all update automatically as you make changes to your project code.

For convenience, we'll refer to the collection of your browser and zero or more other phones, tablets, PCs, or emulators as **connected clients**.

NOTE - for some devices, updates won't apply automatically if the device has gone into an idle mode.

Make Some Project Changes
=========================

Your project is running. It is time to make some changes to various types of files and confirm that Frigate's automatic update and notification tools are working.

There are two main directories you will work out of. The ``client`` directory is where the project's application code and assets live. ``templates`` are where template files live. When changes are made to files in these directories, Gulp will do any processing that needs to happen on them (such as converting SASS to CSS) and copy them to the project's build directory. All content you see when viewing the project's site comes from the project's build directory. The build directory is considered volatile and can be emptied if needed. Running ``gulp`` (or explicitly ``gulp build`` or ``gulp watch``) builds all of the project's files ready for serving. You can make changes directly in the build directory and the site should update, but in general it is best to do all work in the working directories (client and templates).

Editing SASS
------------

Our starting content is a simple page containing red square with rounded corners. Now we'll make a change to the SASS and confirm that everything updates. In an editor, open *client/scss/screen.scss* and modify the background color::

    #main {
      margin: 50px;
      width: 150px;
      height: 150px;
      border-radius: 30px;
      background: red;  <-------------------------- Change 'red' to 'blue'
      transition: transform 1s;
    }

Once you save, check your connected clients and confirm the square has changed color.

NOTE - vim can confuse the Gulp watch if it saves temp files

Editing Templates
-----------------

Let's change a template file. Open *templates/index.html* and add a line in the ``body`` element::

  <body>
    <div id="main"></div>
    <div>Description:</div> <!------------------- INSERT THIS LINE -->
    <script src="/js/build.js"></script>
  </body>

On the page, you should see the text "Description:" below the square.

Editing Javascript
------------------

Now open *client/js/index.js* in your editor, append the following line to the end of the file, and save::

  document.write('Look! A square.');

The text should show up on the page below the square.


Project Assets
==============

The *client/assets* directory is where we'll store files that you won't typically edit during development. For example, image or icon files that are part of the project. Other examples could include files from third party sources: Javascript, CSS, etc. that are part of libraries or tools that you will include in your project.

Frigate includes a sample stylesheet and a couple sample images to play with.

Open ``templates/index.html`` again and add a line for the sample stylesheet in the head section::

      <link rel="stylesheet" href="/css/screen.css">
      <link rel="stylesheet" href="/css/example.css">    <!-- ADD THIS NEW LINE -->

Check your page again, and the background should have changed color.


Edit Directly in the Browser
============================

Javascript Tests and Linting
============================