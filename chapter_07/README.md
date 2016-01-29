# Chapter 7
## Forms and Authentication handling in Angular 2

**Warning:** Our *Angular 2 Essentials* book, encompassing the code examples available here, is still in Alpha state and therefore the samples provided herein may be subject to change without prior notice.

## Installation

Clone the repository, move to the folder containing the source file for this chapter and install the NPM dependencies by executing the following:

```bash
$ git clone https://github.com/deeleman/angular2-essentials.git
$ cd angular2-essentials/chapter_07
$ npm install
```
A TypeScript project settings file ([tsconfig.json](./tsconfig.json)) has been made available in order to ease the project files transpilation into ECMAScript 5.  If you don't have the TypeScript compiler installed, you can [get it here](http://www.typescriptlang.org/). **Warning:** At the time of this writing, the TypeScript compiler on its 1.8 version will complain when transpiling Angular code implementing async interfaces based on Promises. Please use version 1.7.5 or earlier. Once installed, you can compile the project by simply executing the `tsc` command in your console. Please refer to chapter 1 in the book for further instructions, or execute the following in your terminal window after moving the prompt to the chapter folder:

```bash
$ npm i -g typescript@1.7.5
$ tsc
```

**Please note:** You will require a local server pointing to this folder in order to execute the examples.

## Description

As significant as rendering data, editing data is paramount in all modern web applications. Here we will learn to retrieve the end users’ input in our Angular 2 applications by means of interactive forms that implement data validation and form-specific directives to help digest and process the information entered.

Moreover, ensuring that specific areas of your web application stay away from malicious eyes is part of the daily due diligence of any web developer nowadays. We will follow up on this chapter with the application we’ve been building up to now but will proceed to secure with username and password protection all sensible pages allowing users to publish data.

### Topics covered

We will learn how to create HTML forms wrapped inside Angular 2 components and render them with specific routes, introducing the concepts of Control objects, ControlGroup modules and the FormBuilder wrapper. This chapter will also provide deep insights on how to implement user input validation, two data-binding between input forms and rendered data and custom interaction between DOM elements based on user input.

This chapter also taps into one of the most common and sensible tasks of modern web development, so we will leverage all the knowledge obtained over the previous chapters to overview the usual steps required when protecting areas of a site such as creating login forms, exchanging login data and security tokens between mock authentication data services and stores, restricting access to pages by means of our own RouterOutlet and handling state across page views.

### Skills learned

* Leveraging the FormBuilder module to create user input forms.
* Understand the ControlGroup and Control modules and objects.
* Provide form validation with built-in and custom Angular 2 validators.
* Linking DOM items by means of Angular 2 references
* Provide two-way data-binding in user input and other DOM elements.
* Securing areas and pages of our application with password protection
* Leverage RouterOutlet to intercept additional routing handlers.
* Recap on form processing to handle user validation and authentication.
