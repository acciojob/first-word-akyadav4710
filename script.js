function firstWord(s) {
  // your code here
	if(s.length === 0) return '';
	let str = s.trimStart();
	const space =  str.indexOf(' ');
	if(space === -1) return str;
	return str.substring(0,space);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
