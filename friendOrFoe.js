/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

Note: keep the original order of the names in the output.*/

function friend(friends){
return friends.filter(n=>n.length===4);
}


//Or this more dense code does the same thing
/*
function friend(friends){
var realFriends=[];
  for (i=0;i<friends.length;i++){
    if (friends[i].length===4){
      realFriends.push(friends[i]);
    }
  }  return realFriends;
}
*/