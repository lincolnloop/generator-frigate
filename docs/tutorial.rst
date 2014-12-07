************************************************
Introductory Tutorial: Make a Simple App or Site
************************************************

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

Let's change a template file. Open *templates/index.html* and add a line in the ``body`` element::

  <body>
    <div id="main"></div>
    <div>Description:</div> <!------------------- INSERT THIS LINE -->
    <script src="/js/build.js"></script>
  </body>

On the page, you should see the text "Description:" below the square.

Now open *client/js/index.js* in your editor, append the following line to the end of the file, and save::

  document.write('Look! A square.');

The text should show up on the page below the square.

