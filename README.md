Snapin8r
========


Snapin8r is a plugin for [Snap!](http://snap.berkeley.edu) which converts [Scratch 2.0](http://scratch.mit.edu) projects (.sb2) to Snap! projects. It lets you drag and drop Scratch projects into the Snap! IDE just like Snap! projects.

Usage
-----
Add snapin8r.min.js to your copy of Snap! by:

1. Add snapin8r.min.js to the main `snap` directory
2. Add the line `<script src="snapin8r.min.js"></script>` at the *bottom* of the `head`.
3. Alternatively, evaluate snapin8r.min.js on the command line to enable Snapin8tion.

To-do
-----
1. Support comments
2. Testing
3. Errors
4. Make command-line tool with `node`
    1. Fetch project with URL
5. Fetch snapin8r.min.js only when needed
6. Get Jens to integrate it! :-)

Developing
----------
Feel free to fix stuff! Use the `build` command (needs `uglifyjs`) to build snapin8r.min.js from Snapin8r and JSZip's files--or import all of JSZip into Snap! before Snapin8r.

See also
--------
* [Kurt](https://github.com/blob8108/kurt) by @blob8108

Made with [JSZip](http://stuk.github.io/jszip/)
