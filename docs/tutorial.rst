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

You should see some output in the console showing the various :ref:`Frigate build tasks <gulp_primary_tasks>` executing, and web and BrowserSync services starting. Your default browser should open a tab at *localhost:<PORT>* for you.


You should see a red square with rounded corners in the upper left. Now we'll make a change to the SASS and confirm that everything updates. In an editor, open *client/scss/screen.scss* and modify the background color::

    #main {
      margin: 50px;
      width: 150px;
      height: 150px;
      border-radius: 30px;
      background: red;  <---------- Change 'red' to 'blue'
      transition: transform 1s;
    }

Once you save, check your browser and confirm the square has changed color.

Now open *client/js/index.js* in your editor, append the following line to the end of the file, and save::

  document.write('Look! A square.');

The text should show up on the page below the square.

