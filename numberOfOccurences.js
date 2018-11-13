//shows the number of occurences of a value in an element 
Array.prototype.numberOfOccurrences = function(value) {
  var count = 0;
    for (var i = 0; i < this.length; i++)
    {
        if (this[i] == value) { count++; }
    }
    
    return count;
}
