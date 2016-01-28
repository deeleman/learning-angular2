# Chapter 8
## Animating components in Angular 2

**Warning:** Our *Angular 2 Essentials* book, encompassing the code examples available here, is still in Alpha state and therefore the samples provided herein may be subject to change without prior notice.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/angular2-essentials.git
$ cd angular2-essentials/chapter_08
$ npm install
```
A TypeScript project settings file has been made available to ease the project files transpilation into ECMAScript 5.  If you don't have the TypeScript compiler installed, you can [get it here](http://www.typescriptlang.org/). Once installed, you can compile the project by simply executing the `tsc`command in your console. Please refer to chapter 1 in the book for further instructions.

## Description

With all modern browsers embracing the newer features of CSS3 for animation handling, Angular 2 offers support for implementing imperative animation scripting through an incredibly easy but powerful API. This chapter will cover several approaches to implement animation effects, moving from leveraging plain vanilla CSS to apply class-based animations to implementing script routines where Angular 2 takes full responsibility for handling DOM transitions.

### Topics covered

We will go through some of the different techniques currently available for handling animations in Angular 2. First we will overview basic classname-based animation with CSS3 transitions with the help of the Angular builtin directives. Then we will take a look on how Angular provides class-based animation helpers out of the box, so we can easily implement our own transitions by following some basic conventions in our stylesheets. Then we will move into programmatical animation by using the awesome animation builders currently existing in Angular 2.

The last leg of this chapter will provide some insights about **ngAnimate 2.0**, which is set out to replace all the above in the future.

### Skills learned

* Creating animations with plain vanilla CSS.
* Leveraging Angular's class-named animation to better handle transitions.
* Built-in CSS hooks for defining styles for each transition state.
* Animating components with the `CssAnimationBuiler` API
* Designing directives that handle animation.
* Looking into the future with ngAnimate 2.0.
