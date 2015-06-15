// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
	var elArray = [];
	function elCheck(el){
		if($(el).hasClass(className)){
			elArray.push(el);
		}
		if(el.childNodes.length > 0){
			for(var x = 0; x < el.childNodes.length; x++){
				elCheck(el.childNodes[x]);
			}
		}
	}
	elCheck(document.body);
	return elArray;
};
