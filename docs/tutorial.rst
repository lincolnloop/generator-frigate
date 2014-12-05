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

You should see some output in the console showing the various :ref:`Frigate build tasks <gulp_primary_tasks>` executing, and web and Browser-Sync services starting.

Open your browser to `http://localhost:8000`_ (adjust port if necessary)

.. _http://localhost:8000: http://localhost:8000

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