What this project is for?
=========================

This demo accompanies this blog post http://jackma.com/2015/12/16/javascript-modules-and-a-loader-systemjs/

An [ES6 module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [systemjs](https://github.com/systemjs/systemjs)/[builder](https://github.com/systemjs/builder) demo project. In this project, you can find examples of how to write ES6 JavaScript modules, how to load them using systemjs and how to leverage systemjs plugins to load many kinds of resources other than JavaScript, e.g. HTML templates, LESS files, etc.

You can also find examples of how to create a workflow that makes development time much easier and also easily builds/bundles for production.

Usage
=====

Clone this repository:

```git clone https://github.com/jack4it/es6-module-systemjs-demo.git```

Install all npm packages:

```npm install --no-optional```

Install all jspm packages:

```jspm install```

Run the bundle script (this is to be used in example-bundle.html):

```node example-bundle.js```

Finally launch browser-sync and browse to the examples to see the results:

```gulp serve```

Examples
========

**example.html**: An example of how to load ES6 module, HTML and LESS in *browser* on the fly during development time

**example-bundle.js**: An example of how to transpile ES6 modules into ES5 codes, compile LESS into css and bundle all of them together in *node* during build time for production

**example-bundle.html**: An example of how to load the systemjs bundle file. You can see how different the network roundtrips are between the **example.html** file and this file. Note: Make sure you run ```node example-bundle.js``` before opening this page

License
=======

MIT
