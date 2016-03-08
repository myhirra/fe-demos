/**
 * A: m 
 * B: n
 */


/**
 * 站队
 * @augments {array[string]} boys
 *           {array[string]} girls
 * @return   {array[int]} [description]
 */
function queue(boys,girls){

	if(!boys || !girls){
		return false;
	}

	var result = [],
		bigArray = [],
		shortArray = [],
		isBoyBig = boys.length > girls.length;

	if(isBoyBig){
		bigArray = boys;
		shortArray = girls;
	} else{
		bigArray = girls;
		shortArray = boys;
	}
	
	shortArray.forEach(function(small,index){
		if(isBoyBig){
			result.push(small);
			result.push(bigArray[index]);
		}else{
			result.push(bigArray[index]);
			result.push(small);
		}
	});

	return result.concat(bigArray.splice(shortArray.length));
}


//test
console.log(queue(['m1','m2','m3'],['f1','f2','f3','f4','f5']));
console.log(queue(['m1','m2','m3','m4','m5'],['f1','f2','f3']));