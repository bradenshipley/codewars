/*
Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Code below:
************************************* */

function foldTo(distance) {
/*setting an exit statement 
for if the number is negative*/ 
  if (distance<=0){
    return null;
    }
  //declaring variables
  var thickness=.0001;
  var count;
  /*as long as our thickness is smaller than the
  distance, we will keep on folding*/
  for (count=0;thickness<distance;count++){
    thickness*=2;
    }
  return count;/*making sure to return the 
  count before the end of the function*/
}
