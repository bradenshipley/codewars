<script type="text/javascript">
/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  let num = 0;
  for (let i=0;i<arr.length;i++){
    let num=arr[i];
    if (func(num)){
      return num;
    }
  }
  return undefined;
}

</script>