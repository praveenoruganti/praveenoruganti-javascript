var reverse = function (n) {
  //evaluating whether n is negative
  //storing the answer in a const as boolean

  const isNegative = n < 0;

  //converting n to an absolute value

  n = Math.abs(n);

  //setting up variable to store reversed no

  let reverseN = 0;

  //count variable for the while loop
  let count = 0;
  while (n) {
    count++;
    //we have two basic operations
    //Operation 1 pop()
    //we % our input by 10 and the remainder will
    //always be the last digit of our no
    let popped = n % 10;

    //knocking off last digit of input
    n = Math.floor(n / 10); //12

    //Operation 2 = push()
    //pushing the variable onto our reverseN var

    reverseN = reverseN * 10 + popped;

    //console.log to show values on each iteration.
    console.log(
      `pass${count} popped = ${popped} n = ${n} reverseN = ${reverseN}`
    );
  }

  //check our integer is within bounds
  //the no represents the maximum positive 32 bit integer

  if (reverseN > 0x7fffffff) {
    return 0;
  }

  if (isNegative) {
    return -reverseN;
  } else {
    return reverseN;
  }
};

console.log(reverse(321));
