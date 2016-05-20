// IIFE - Immediately-invoked function expression
var counter = (function(){
  let i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    },
    increment: function(){
      return ++i;
    }
  };
})();

counter.get(); // 0
counter.set( 3 );
counter.increment(); // 4
counter.increment(); // 5
