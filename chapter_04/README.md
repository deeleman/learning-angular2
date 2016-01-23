# Chapter 4
## Building an application with Angular 2 components

**Warning:** Our *Angular 2 Essentials* book, encompassing the code examples available here, is still in Alpha state and therefore the samples provided herein may be subject to change without prior notice.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/angular2-essentials.git
$ cd angular2-essentials/chapter_04
$ npm install
```
A TypeScript project settings file has been made available to ease the project files transpilation into ECMAScript 5.  If you don't have the TypeScript compiler installed, you can [get it here](http://www.typescriptlang.org/). Once installed, you can compile the project by simply executing the `tsc`command in your console. Please refer to chapter 1 in the book for further instructions.

## Description

Now that the reader has learned how to build the standalone bricks of an Angular 2 application, its time to glue all our components together in the context of a larger frameset. An Angular 2 application is in fact a hierarchy of components with other components nested within them, and that paradigm will be thoroughly analyzed in this chapter.

### Topics covered

We will build up on the two components we shipped back in chapters 1 and 3 and will wrap them around a root component instantiated by a global application bootstrapper which is also in charge for managing dependency injection application wide.

This is our first step on building the broader components tree our application will turn into by the end of the book. We will then recap more thoroughly on how Angular handles dependency injection and how to inject dependencies between components.

### Skills learned

* Building root components with advanced bootstrapping.
* Full comprehensive understanding of Angular 2’s dependency injection paradigm.
* Host and Visibility relationships between components.
* Nesting components and handling data-binding between them.
* Using the EventEmitter to allow custom event binding and bubbling.
* Building custom pipes.
* Component lifecycle.
