# Chapter 3
## Enhancing our component  interactivity and layout

**Warning:** Our *Angular 2 Essentials* book, encompassing the code examples available here, is still in Alpha state and therefore the samples provided herein may be subject to change without prior notice.

## Installation

This chapter includes two separate examples accessible from two separate folders. You will need to clone the repository and execute the `npm` install and `tsc` compiling commands on each folder

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/angular2-essentials.git
$ cd angular2-essentials/chapter_03

# From this point choose either ./example1 or ./example2. eg:

$ cd example1 
$ npm install
```
A TypeScript project settings file has been made available to ease the project files transpilation into ECMAScript 5.  If you don't have the TypeScript compiler installed, you can [get it here](http://www.typescriptlang.org/). Once installed, you can compile the project by simply executing the `tsc`command in your console. Please refer to chapter 1 in the book for further instructions.

## Description

Now that we’re familiar with the basic form and shape of an Angular component and the syntax that helps define it, we can go a step further and make them more expressive by means of property and event binding. For doing so we will take a comprehensive look on the Angular 2 template syntax, how data and behaviors are handled between the template and the component class, and how we can enrich its output even more by means of pipes and custom directives.


### Topics covered

We will go through the process of building complex templates, either inline or wrapped in views files. For doing so we will create a new component from scratch and build up on top of it. Then we will review how property binding is handled compared to the traditional JavaScript attribute value bindings. We will slightly overview event binding as well with short real examples of interactive behaviors and animations and will enhance the component output by implementing some built-in pipes and directives.

### Skills learned

* Template syntax.
* Property binding.
* Event binding.
* Built-in pipes.
* Built-in directives.
* Components as directives with views vs Decorator-style directives.
* Custom directives.
