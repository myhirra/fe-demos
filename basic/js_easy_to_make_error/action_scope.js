//node action_scope.js

'use strict';
(function() {
	var a = 1;

	function func() {
		a = 2;
		console.log(a);
		return false;

		function a() {}
	}

	func();
	console.log(a);
})();

(function() {
	var a = 1;

	function func() {
		a = 2;
		console.log(a);
		return false;
	}

	func();
	console.log(a);
})();