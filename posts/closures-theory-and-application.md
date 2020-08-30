---
tags:
  - javascript
published: true
date: 2020-08-30T16:00:37.513Z
title: "Closures: Theory and Application"
---
Closures are a rite of passage in the JavaScript community. You will find multiple blogs, videos, chapters, and software interview questions dedicated to this concept. That is to no surprise since an understanding of closures signals a mature understanding of multiple programming concepts. However, while there are multiple resources regarding closures, it stays cursed as one the most head scratching subjects in javascript. Thus, my plan is to grab the best examples from the best resources I've read and cook up a down to earth explanation of closures, and include a relevant real life case.

\##Identify closures as a concept

First, lets identity a basic closure in an idealized setting:

```javascript
function wait(message) {
	setTimeout( function timer(){
		console.log( message );
	}, 1000 );

}
```

As you may know, `setTimeout()` executes by the interval you pass in its parameter. In this case it is 1000 milliseconds or 1 second. Thus, our code executes and one minute later whatever is inside the timer function executes. 
Lets execute it and see what happens:
`wait( "Hello, closure!" );`

Did you find anything odd here? Notice that the variable message that is consoled logged has been long dead in terms of execution at that moment in time, yet you will keep seeing message outputted. It is like our code remembers its scope, and hence a Closure has been observed!\
\
In other words, as put in the series *you don't know JavaScript*

> "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope."

As we have just observed. Furthermore, this same behavior can be observed in click events, fetch requests, etc...

\##An example of closures in the wild you might've already run into: The for loop

Now that you're familiar with closures as a concept, lets look at the most common example when it comes to closures. The for loop:

```javascript
for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}
```

If we naively predict the outcome of this segment of code. We may expect something like:

```javascript
1  // i = 1 at second 1
.
.
.
5 // i = 5 at second 5
```

However, if we run the code, we get 6 printed 5 times

```javascript
6  // i = 6 at second 1
.
.
.
6 // i = 6 at second 5
```

Ok, nothing went how we expected. Lets see why.\
\
There is a pair of things to address:

1. Why did `i` go all the way till six? We clearly set our condition to be `i<=5`.
2. Why didn't our output execute as we intended?

For 1) is simple to answer. Our terminating condition is `i<=5` and that happens first when `i` is 6. So the output is showing the final value of `i`

As for 2) the reason is **every iteration is closed over the same global scope**. In other words, it is as if all the setTimeout callbacks where iterated one after the other. Thus, lets add some scope to fix it then. The mutated for loop will look something like this:

```javascript
for (var i=1; i<=5; i++) {
	(function(j){
		setTimeout( function timer(){
			console.log( j );
		}, j*1000 );
	})( i );
}
```

The [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)(Immediately Invoked Function Expression) helps us create a scope per iteration, and we fill in each iteration of `i` to an individual scope.

\##Closures and Factory Pattern

The Factory Pattern is a ubiquitous pattern in JavaScript for creating complex objects. It provides closure for variables declared inside the factory example:

```javascript
function createAdder() {
  let value = 0;

  const add = (amount) => (value = value + amount);
  const getValue = () => (value);

  return {
    add,
    getValue,
  }
}
```

Note that `value` is a **private variable**. Only functions declared inside `createAdder()` have access to it. Furthermore, because `value` is inside of this closure, the variable “lives on” between function calls.

We'll show this by first instantiating an adder object, and value will initialize at `0`:

```javascript
const myAdder = createAdder();
```

Now myAdder references an object with the variable value on memory as `0`. Lets call one of the functions in `myAdder` now:

```javascript
myAdder.add(1);
// => 1
adder.add(1);
adder.getValue();
// => 2
adder.add(5);
adder.getValue();
// => 7
```

And surprise, surprise, the value is remembered and increases as we expected from due to its closure.

The Factory Pattern is a very common pattern in JavaScript. One of its biggest uses is in the Redux library. One of the most popular state management libraries out there where the store's closure prevents unintended reads or writes from being made outside of a dispatch() function.

In this blog, we observed, broke down, and applied closures in JavaScript. If you have any questions or concerns feel free to email me!

Source(s):
https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md