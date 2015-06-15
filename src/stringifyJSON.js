// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

function stringifyJSON(obj) {
	var type = typeof obj;
	if(obj === null){
		return "null"
	}else if( type === "string"){
		return '"' + obj + '"'
	}else if(type === "boolean" || type === "number"){
		return '' + obj;
	}else if(obj === undefined){
		return undefined;
	}else if(Array.isArray(obj)){
		var res = [];
		if(obj.length == 0){
			return '[]';
		}
		for(var x = 0; x < obj.length; x ++){
			res.push(stringifyJSON(obj[x]));
		}
		return '[' + res + ']';
	}
	else if( type === "object"){
		var keys = Object.keys(obj);
		if(keys.length == 0){
			return '{}';
		}
		var res = '{';
		for(var x = 0; x < keys.length - 1; x++){
			if(typeof obj[keys[x]] !== 'function' && obj[keys[x]] !== undefined){
				res = res + stringifyJSON(keys[x]) + ':' + stringifyJSON(obj[keys[x]]) + ',';
			}else{
				return '{}';
			}
		}
		var y = keys.length - 1
		res = res + stringifyJSON(keys[y]) + ':' + stringifyJSON(obj[keys[y]]) + '}';
		return res;
	}
};
