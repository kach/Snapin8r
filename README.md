Snapin8r
========


Snapin8r is a plugin for [Snap!](http://snap.berkeley.edu) which converts [Scratch 2.0](http://scratch.mit.edu) projects (.sb2) to Snap! projects.

Usage
-----
As of now, there is no reasonable user interface. Snapin8r comes with a simple web page for testing, which you can use temporarily:

* Serve the entire 'Snapin8r' directory on `localhost`. The easiest way to do this is to use the included `serve` command:
```
cd ~/path/to/Snapin8r
./serve .
```
`serve` prints the address you can access the test page at.

* Open `<address>/test.html` in your browser.
* Choose the `.sb2` file with the form.
* After a few moments, Snap! and the converted project (or an error message) should appear in an iframe.
* Save your project from within Snap!
* You can also copy the output XML from the console.

To-do
-----
1. Support comments
2. Testing
3. Errors
4. Make command-line tool with `node`
    1. Fetch project with URL
5. Integrate with Snap! (hopefully for @nathandinsmore or @jmoenig)

See also
--------
* [Kurt](https://github.com/blob8108/kurt) by @blob8108

Made with [JSZip](http://stuk.github.io/jszip/)
