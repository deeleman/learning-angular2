# Chapter 5
## Asynchronous data services with Angular 2

**Warning:** Our *Angular 2 Essentials* book, encompassing the code examples available here, is still in Alpha state and therefore the samples provided herein may be subject to change without prior notice.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/angular2-essentials.git
$ cd angular2-essentials/chapter_05
$ npm install
```
A TypeScript project settings file has been made available to ease the project files transpilation into ECMAScript 5.  If you don't have the TypeScript compiler installed, you can [get it here](http://www.typescriptlang.org/). Once installed, you can compile the project by simply executing the `tsc`command in your console. Please refer to chapter 1 in the book for further instructions.

## Description

Previously in the past 4 chapters, we delivered a working application blueprint encompassing several UI items that shaped a components tree. Now it's time to flesh it out with some data-driven content. We will go through different strategies to fetch and render data along this chapter, focusing on how to handle information asynchronously and enhancing our components to make them fully reactive to data changes.

### Topics covered

We will overview how we can create simple data services and stores by means of TypeScript classes and use them them in our components. For doing so we will take a look to the different asynchronous data serving mechanisms in store such as promises or observable data.

### Skills learned

* Classes as data services.
* Consuming 3rd party data APIs with angular's built-in Http module.
* Consuming promises-based APIs.
* Using observable data bindings.
* Handling change detection.
