/**
 * @description show Why it's function array
 * @return {}
 */
var countArr = function() {
    var count = [];
    for (var i = 0; i < 10; i++) {
        count[i] = (function(num) {
            return num;
        })(i);
    }
    console.dir(count);
}
countArr();

/**
 * @description show why it's the same array
 */
var countWithTimeout = function() {
    var count = [];
    for (var i = 0; i < 10; i++) {
    	setTimeout(function(){
    	   count.push(i);
    	});
    }

    setTimeout(function(){
	   console.log(count);
    },100)    
}
countWithTimeout();

/**
 * @description show why it's not the same array
 */
var countWithTimeoutClosure = function() {
    var count = [];
    for (var i = 0; i < 10; i++) {
        (function(number){
            setTimeout(function(){
               count.push(number);
            });
        })(i);
    }

    setTimeout(function(){
       console.log(count);
    },100)    
}
countWithTimeoutClosure();