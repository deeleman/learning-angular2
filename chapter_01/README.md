# Chapter 1
## Creating our first component in Angular 2

We kickstart our journey into Angular by building our very first component, which is the bread and butter of all Angular 2 applications. Angular 2 components conform the bricks of all web applications and by the end of this chapter we will have a fully functional web widget harnessing the power of Angular.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```javascript
$ git clone https://github.com/deeleman/learning-angular2.git
$ cd learning-angular2/chapter_01
$ npm install
```

An `npm postinstall` hook will manage the installation of the typings required for compiling the project. You can run `npm start` once finished to trigger the TypeScript transpiling and spawn a local server in your machine already pointing to the chapter folder.

## Topics covered

This chapter exposes the user to the code paradigm of Angular components, based on ES6 classes decorated with annotations. Prior to that we will guide the user through the vast ocean of tooling available for working on TypeScript-baed projects.

## Skills learned

* How to setup a workspace with support for Angular 2 and TypeScript.
* Leverage automated build tools like Gulp to help accomplish the above.
* Enhance our IDE of choice (Sublime, Atom, [https://code.visualstudio.com/](Visual Studio Code)) with TypeScript code visual helpers.
* Build our very first Angular 2 component and render it on an HTML page.
* Format our component output with pipes.
* Bootstrap our newly created component.
