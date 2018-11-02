/*
Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

<script>
//this doesnt check to see if the arr is empyty....whoops

function oddOrEven(arr) {
//declaring a variable to store our sum of the arr
  var sum=0;
  //for loop through the arr adding up elements
    for (i=0;i<arr.length;i++) {
      sum += arr[i];
    }
    //if sum is even, return "even", else "odd"
  if (sum%2==0){
    return "even";
    } 
    return "odd";
}

</script>