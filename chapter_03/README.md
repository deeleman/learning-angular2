# Chapter 3
## Enhancing our component interactivity and layout

**Warning:** Our *Angular 2 Essentials* book, encompassing the code examples available here, is still in Alpha state and therefore the samples provided herein may be subject to change without prior notice.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/angular2-essentials.git
$ cd angular2-essentials/chapter_03
$ npm install
```
A TypeScript project settings file ([tsconfig.json](./tsconfig.json)) has been made available to ease the project files transpilation into ECMAScript 5.  If you don't have the TypeScript compiler installed, you can [get it here](http://www.typescriptlang.org/). **Warning:** At the time of this writing, the TypeScript compiler on its 1.8 version will complain when transpiling Angular code implementing async interfaces based on Promises. Please use version 1.7.5 or earlier. Once installed, you can compile the project by simply executing the `tsc` command in your console. Please refer to chapter 1 in the book for further instructions, or execute the following in your terminal:

```bash
$ npm i -g typescript@1.7.5
$ tsc
```

**Please note:** You will require a local server pointing to the chapter folder in order to execute the examples, accessible from the paths (replace the given port by your own if required):

## Description

Now that we’re familiar with the basic form and shape of an Angular component and the syntax that helps define it, we can go a step further and make them more expressive by means of property and event binding. For doing so we will take a comprehensive look on the Angular 2 template syntax, the component input and output endpoints and how data and behaviors are handled between the template and the component class.


### Topics covered

We will go through the process of building complex templates, either inline or wrapped in views files. For doing so we will create a new component from scratch and build up on top of it. Then we will review how property binding is handled compared to the traditional JavaScript attribute value bindings. We will slightly overview event binding as well with short real examples of interactive behaviors.

### Skills learned

* Template syntax.
* Property binding.
* Event binding.
* Built-in pipes.
* Built-in directives.
