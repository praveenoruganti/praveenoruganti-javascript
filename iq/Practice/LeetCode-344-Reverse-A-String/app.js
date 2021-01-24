let input = ['h', 'e', 'l', 'l', 'o'];

const reverseString = (input) => {
  //setting up left and right pointers
  let left = 0;
  let right = input.length - 1;

  //set up while loop
  while (left <= right) {
    //perform reversal
    //temp var so we can store one while setting other
    let temp = input[left];
    //set right to left
    input[left] = input[right];
    //then set right to temp
    input[right] = temp;
    //decrement right to proceed loop
    right--;
    left++;
  }
  return input;
};

console.log(reverseString(input));
