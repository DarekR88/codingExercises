module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function. Parse the string so it is an array of objects and return the array. The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/

let resArray = []
let newArray = csv.split(/\r?\n/)
let keys = newArray[0].split(',')
for (let i=1; i<newArray.length; i++){
	let valueArray = newArray[i].split(',')
	let cvsObj = {}
	for (let j=0; j<keys.length; j++){
		cvsObj[keys[j]] = valueArray[j]
	}
	resArray.push(cvsObj)
}
return resArray

};
