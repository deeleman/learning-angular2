# Chapter 10
## Unit testing Angular 2 applications

This chapter contains a broad overview of the different techniques and approaches available to conduct unit test on components, directives, pipes, services and routes.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/learning-angular2.git
$ cd learning-angular2/chapter_04
$ npm install
```

An `npm postinstall` hook will manage the installation of the typings required for compiling the project. You can run `npm start` once finished to trigger the TypeScript transpiling and fire a local server in your machine already pointing to the chapter folder.

Since this chapter is all about testing, you can move on directly to the tests by executing `npm test` and then browse to `/spec-runner.html` on the browser fired.


## Topics covered

While unit testing is meant to be carried out while the project development is ongoing, we will overview at the end of the book all the bits and pieces in a non thorough manner along this chapter. By the end of this section you will know how to implement testing tools to perform proper unit testing of your application classes and components.

## Skills learned

* Overview the importance of testing and, more specifically, unit testing
* Review the different parts of a JavaScript unit test
* Discover Jasmine, our testing framework of choice
* Learn how to setup a unit testing environment with Jasmine and SystemJS
* Build your very first test spec testing a pipe
* Design unit tests for components, with or without dependencies
* Put our routes to the test
* Implement tests for services, mocking dependencies and stubs
* Intercept XHR requests and provide mocked responses for better control
* Discover how to test directives as components with no view.
* Get introduced to other concepts and tools such as Karma, code coverage tools or E2E testing.
* Get suggestions on how to continue your research on Angular 2.
