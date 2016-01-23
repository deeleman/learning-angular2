# Chapter 2
## Introducing TypeScript

**Warning:** Our *Angular 2 Essentials* book, encompassing the code examples available here, is still in Alpha state and therefore the samples provided herein may be subject to change without prior notice.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and check each example matching its order of appearance in the chapter:

```bash
$ git clone https://github.com/deeleman/angular2-essentials.git
$ cd angular2-essentials/chapter_02
```
A TypeScript project settings file has been made available to ease the project files transpilation into ECMAScript 5.  If you don't have the TypeScript compiler installed, you can [get it here](http://www.typescriptlang.org/). Once installed, you can compile the project by simply executing the `tsc`command in your console. Please refer to the chapter 1 of the book for further instructions.

## Description

Typescript is an open source typed superset of JavaScript, following the EcmaScript6 syntax, that compiles to plain Javascript. Its elegant syntax helps the developer write expressive and descriptive code, and enable IDEs to provide a richer environment for understanding code interdependencies and debugging as you type. Although Angular 2 applications can be written in a wide rage of languages and syntaxes (ES5, ES6, ES7, CoffeScript, Dart), TypeScript has been appointed by its creators as the preferred syntax of choice.

### Topics covered

We will briefly go through the rationale behind its use in Angular 2 and its major differences with other popular syntaxes and standards. Then we will dive deep into its syntax for building JavaScript-based applications, using the component we built in the previous chapter as an testing ground.

### Skills learned

* Overview the background and rationale behind TypeScript.
* Discover online resources to practice while we learn.
* Recap on the concept of typed values and how to represent them.
* Build our own types based on classes and interfaces.
* Take a bird's eye view on how to improve inter-operability with modules.
