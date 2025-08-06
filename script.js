function isSameType(value1, value2) {
  //your js code here
	if(a === 'NaN') a = NaN;
	if(b === 'NaN') b = NaN;

	if(!isNaN(a)) a = Number(a);
	if(!isNaN(b)) b = Number(b);

	if(Number.isNaN(a) && Number.isNaN(b)) return true;
	if(Number.isNaN(a) || Number.isNaN(b)) return false;

	return typeof a === typeof b ;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

