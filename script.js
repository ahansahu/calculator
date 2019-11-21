var textview = document.forms['myForm']['textview'];
var last;


function insertNum(num){
	if (last == 1){
		textview.value = num;
		last = 0
	}
	else{
		textview.value += num;
	}
}

function insertOp(op){
	textview.value += op;
}

function equal(){
	textview.value = eval(textview.value);
	last = 1;
}

function cleardisp(){
	textview.value = '';
}

function back(){
	var strcalc = textview.value
	textview.value = strcalc.substring(0, strcalc.length - 1);
}

function decimal(){
	textview.value += '.';
}