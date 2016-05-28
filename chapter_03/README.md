# Chapter 3
## Enhancing our component interactivity and layout

Now that we’re familiar with the basic form and shape of an Angular component and the syntax that helps define it, we can go a step further and make them more expressive by means of property and event binding. For doing so we will take a comprehensive look on the Angular 2 template syntax, the component input and output endpoints and how data and behaviors are handled between the template and the component class.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/learning-angular2.git
$ cd learning-angular2/chapter_03
$ npm install
```

An `npm postinstall` hook will manage the installation of the typings required for compiling the project. You can run `npm start` once finished to trigger the TypeScript transpiling and fire a local server in your machine already pointing to the chapter folder.

## Topics covered

We will go through the process of building complex templates, either inline or wrapped in views files. For doing so we will create a new component from scratch and build up on top of it. Then we will review how property binding is handled compared to the traditional JavaScript attribute value bindings. We will slightly overview event binding as well with short real examples of interactive behaviors.

## Skills learned

* Template syntax.
* Property binding.
* Event binding.
* Built-in pipes.
* Built-in directives.
