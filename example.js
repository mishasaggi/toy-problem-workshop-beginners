    //Toy Problem Type: Manipulating Data using inbuilt JS functions

    // Given a non-negative integer, 
    // return an array containing a list of 
    // independent digits in reverse order.
    // Example: 348597 => [7,9,5,8,4,3]



    function digitize(n) {

    }

    /* What inbuilt functions can be useful here?



















    */

    //Solutions:

    function digitize(n) {
      var numArr = [];
      n = '' + n;
      for (var i = n.length-1; i >= 0; i--) {
        numArr.push(parseInt(n[i]));
      }
      return numArr;
    }
    /*











    */

    function digitize(n) {
      var arr = n.toString().split("").reverse();
      arr.forEach(function(a,i){ arr[i] = parseInt(a);});
      return arr;
    }
    /*















    */

   
    
    function digitize(n) {
      return n.toString().split("").reverse().map(function(i){
        return parseInt(i);
      });
    }
    /*














    */

    function digitize(n) {
      return (n + '').split('').reverse().map(function(x){return +x;});
    }
    /*

















    */

     function digitize(n){
      return (n + '').split('').map(Number).reverse();
    }
    /*
















    */

    function digitize(n) {
      return n.toString().split("").reverse().map(Number);
    }
    /*
















    */

    function digitize(n) {
      return String(n).split('').map(Number).reverse()
    }
    /*
















    */


    function digitize(n) {
      return Array.from(String(n), Number).reverse();
    }
    /*
















    */

    function digitize(n) {
      var y = [];
      
      while (n > 0) {
        y.push(n % 10);
        n = Math.floor(n/10);    
      }
      
      return y;
    }
    /*










    */

    function digitize(n) {
      if(n < 10) return [n];
      var arr =  digitize(Math.floor(n / 10));
      arr.unshift(n % 10);
      return arr;
    }
    /*













    */

    

    function digitize(n) {
      return n > 0 ? [n % 10].concat(digitize(Math.floor(n / 10))) : [];
    }
    /*

















    */

    function digitize(n) {
      var out = [], ns = n + '';
      for(var x=0;x<ns.length;x++)
        out.push(Number(ns.charAt(ns.length-1-x)));
      return out;
    }
    /*














    */

    function digitize(n) {
      return n>9? [n%10].concat(digitize(Math.floor(n/10))) : [n]
    }
    /*


















    */

    //Toy Problem Type: Logical Puzzle

     // Description:

     // Create the function consecutive(arr) that takes an array of integers and 
     // return the minimum number of integers needed to make the contents
     // of arr consecutive from the lowest number to the highest number.

     // For example: 
     // If arr contains [4, 8, 6] then the output should be 2 because 
     // two numbers need to be added to the array (5 and 7) to make it 
     // a consecutive array of numbers from 4 to 8. 
     // Numbers in arr will be unique.

    function consecutive(arr) {
      arr = arr.sort(function(a,b) { return a - b; });
      if ( arr.length <= 1 ) return 0;
      else { 
        var diff = arr[arr.length-1] - (arr[0]);
        if ( diff > arr.length ) return ((diff+1) - arr.length);
        else return 0;
      }
    }
    /*











    */

    function consecutive(arr) {
      return arr.length && Math.max.apply(0,arr) - Math.min.apply(0,arr) - arr.length + 1;
    }
    /*

















    */

    function consecutive(arr) {
        arr.sort(function (a, b) { return a - b; });
        return (arr[arr.length - 1] - arr[0]) - (arr.length - 1) || 0;
    }
    /*

















    */

      //Toy Problem Type: Recursion


  //recursive nthFibonacci

  // Recursion Rules

  // Defining Recursive Methods

  // a recursive method must have at least one base case (that does not make a recursive call)
  // a recursive method must have at least one recursive case (that does make a recursive call)
  // to avoid "infinite" recursion, a recursive call must always be made with a smaller or 
  //    simpler subproblem of the original problem being solved

  // Recursive Helper Methods

  // "helper" methods (usually with extra parameters used to keep track of the subproblem being solved) 
  // often make using recursion easier
  // typically, a non-recursive method (meant to be called by users) 
  // will call a recursive helper method with the appropriate initial values for the extra parameters.




























