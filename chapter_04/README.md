# Chapter 4
## Powering up our component with Pipes and Directives

In this chapter we will take a comprehensive overview on how we can enrich the output of our custom Angular 2 components by means of pipes and custom directives.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/learning-angular2.git
$ cd learning-angular2/chapter_04
$ npm install
```

An `npm postinstall` hook will manage the installation of the typings required for compiling the project. You can run `npm start` once finished to trigger the TypeScript transpiling and fire a local server in your machine already pointing to the chapter folder.

### Topics covered

We will go through the process of building complex templates, either inline or wrapped in views files. For doing so we will create a new component from scratch and build up on top of it. Then we will review how property binding is handled compared to the traditional JavaScript attribute value bindings. We will slightly overview event binding as well with short real examples of interactive behaviors and animations and will enhance the component output by implementing some built-in pipes and directives.

### Skills learned

* Using data stores with our components
* Built-in pipes.
* Built-in directives.
* Components as directives with views vs Decorator-style directives.
* Custom directives.
