# JavaScript Closures
Whenever you create a function within another function, you have created a closure. The inner function is the closure. This closure is usually returned so you can use the outer function’s variables at a later time.

```javascript
function outerFunction () {
  const outer = `I see the outer variable!`

  function innerFunction() {
    console.log(outer)
  }

  return innerFunction
}

outerFunction()() // I see the outer variable!
```

Since the inner function is returned, you can also shorten the code a little by writing a return statement while declaring the function.

```javascript
function outerFunction () {
  const outer = `I see the outer variable!`

  return function innerFunction() {
    console.log(outer)
  }
}

outerFunction()() // I see the outer variable!
```

Since closures have access to the variables in the outer function, they are usually used for two things:
- To control side effects
- To create private variables

## Controlling side effects with closures
Side effects happen when you do something in aside from returning a value from a function. Many things can be side effects, like an Ajax request, a timeout or even a console.log statement:

```javascript
function (x) {
  console.log('A console.log is a side effect!')
}
```

When you use closures to control side effects, you’re usually concerned with ones that can mess up your code flow like Ajax or timeouts.

Let’s go through this with an example to make things clearer.

Let’s say you want to make a cake for your friend’s birthday. This cake would take a second to make, so you wrote a function that logs made a cake after one second.

```javascript
function makeCake() {
  setTimeout(_ => console.log(`Made a cake`), 1000)
}
```
As you can see, this cake making function has a side effect: a timeout.

Let’s further say you want your friend to choose a flavor for the cake. To do so, you can write add a flavor to your makeCake function.

```javascript
function makeCake(flavor) {
  setTimeout(_ => console.log(`Made a ${flavor} cake!`), 1000)
}
```
When you run the function, notice the cake gets made immediately after one second.
```javascript
makeCake('banana')
// Made a banana cake!
```
The problem here is that you don’t want to make the cake immediately after knowing the flavor. You want to make it later when the time is right.

To solve this problem, you can write a prepareCake function that stores your flavor. Then, return the makeCake closure within prepareCake.

From this point on, you can call the returned function whenever you want to, and the cake will be made within a second.

```javascript
function prepareCake (flavor) {
  return function () {
    setTimeout(_ => console.log(`Made a ${flavor} cake!`), 1000)
  }
}

const makeCakeLater = prepareCake('banana')

// And later in your code...
makeCakeLater()
// Made a banana cake!
```
That’s how closures are used to reduce side effects – you create a function that activates the inner closure at your whim.

## Private variables with closures

As you know by now, variables created in a function cannot be accessed outside the function. Since they can’t be accessed, they are also called private variables.

However, sometimes you need to access such a private variable. You can do so with the help of closures.

```javascript
function secret (secretCode) {
  return {
    saySecretCode () {
      console.log(secretCode)
    }
  }
}

const theSecret = secret('Praveen Oruganti Rocks!!')
theSecret.saySecretCode()
// 'Praveen Oruganti Rocks!!'
```
saySecretCode in this example above is the only function (a closure) that exposes the secretCode outside the original secret function. As such, it is also called a privileged function.

**Note**: Generally, closures are used for data privacy.

## Summary

When you declare a variable in a function, you can only access it in the function. These variables are said to be scoped to the function.

If you define any inner function within another function, this inner function is called a closure. It retains access to the variables created in the outer function.

### [Contribution for a Cause](http://bit.ly/2WryDT8)