/*
The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }
*/



function count (string) {
  var result = {}; //creating an empty object to store our characters and their count
  if(string.length != 0) { // Check the string's length whether it is equals to 0
    for (var i = 0; i < string.length; i++) { // Iterate the string
      var char = string.charAt(i); //setting a variable for the characters
       if (result.hasOwnProperty(char)) { // Check whether the character is already in the object
        result[char]++; // If yes, we increase the value on the char property
      } else {
        result[char] = 1; // If not, we add it to the result object's property
      }
    }
  }
  return result;
}