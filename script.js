function isSameType(value1, value2) {
  //your js code here
  if (value1 === "NaN") value1 = NaN;
  if (value2 === "NaN") value2 = NaN;

  // Convert numeric strings to numbers
  if (!isNaN(value1)) value1 = Number(value1);
  if (!isNaN(value2)) value2 = Number(value2);

  if (Number.isNaN(value1) && Number.isNaN(value2)) return true;
  if (Number.isNaN(value1) || Number.isNaN(value2)) return false;

  return typeof value1 === typeof value2;	
};



// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

