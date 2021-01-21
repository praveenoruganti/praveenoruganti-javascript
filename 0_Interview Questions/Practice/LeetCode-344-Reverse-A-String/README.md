We are attempting to reverse an incoming array to our function in place without creating any new variables. The approach we are taking will be solving this problem for optimum time complexity and therefore avoiding the typical method chaining approach below: 

 string.split().reverse().join()

Instead I will be implementing a dual pointer method by first setting up the pointers. 

 1. let left = 0; 
 
 2. let right = input.lenght -1; 

This will give me an index no I can use on the array input and increment and decrement as we go. For that we'll need a while loop: 

 while (left <=right){//do cool stuff}

Then we've got 4 simple steps we want our loop to perform.

1.let temp = input[left];

2.input[left] = input[right];

3.input[right] = temp;

4.right--;
  left++;

We first set up a temporary variabl so we don't overwrite inout[left] in step two. Then we set right to left, after which we set the temp variable to right. Finally we increment and decrement our two pointers and repeat this process untill left === right. 
