What this project is for?
=========================

A [ES6 module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [systemjs](https://github.com/systemjs/systemjs)/[builder](https://github.com/systemjs/builder) demo project. In this project, you can find examples of how to write ES6 JavaScript modules, how to load them using systemjs and how to leverage systemjs plugin loaders to load various kind of resources, e.g. HTML templates, LESS files, etc.

Usage
=====

Clone this repository:

```git clone https://github.com/jack4it/es6-module-systemjs-demo.git```

Install all npm packages:

```npm install --no-optional```

Install all jspm packages:

```jspm install```

Finally launch browser-sync and browse to the examples to see the results:

```gulp serve```

Examples
========

**example.html**: An example of how to load ES6 module, HTML and LESS in *browser* on the fly during development time

**example-bundle.js**: An example of how to transpile ES6 modules into ES5 codes, compile LESS into css and bundle all of them together in *node* during build time for production

**example-bundle.html**: An example of how to load the systemjs bundle file. You can see how different the network roudtrips are between the **example.html** file and this file. 

License
=======

MIT
