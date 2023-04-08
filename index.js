function receivesAFunction(callback) {
    callback();
  }
  
  
  receivesAFunction(function() {
    return " return the value of receive function";
  });
  
  function returnsANamedFunction() {
    return receivesAFunction;
  }
  
  const anonymous = function() {
    return "It is Anonymous Function calling";
  }
  
  function returnsAnAnonymousFunction() {
   return  (function (){return "It is Anonymouse Function calling"});
  }
  
  