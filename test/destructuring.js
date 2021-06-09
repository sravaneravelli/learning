let names={"fname":"hema","lname":"narini","age":20,"father":"g","mother":"m"}
console.log(names.fname)
console.log(names.lname);
var fanme=names.fname;
var lanme=names.lname;
var ag=names.age;
var fathe=names.father;
var mothe=names.mother;



let {fname,lname:lnm,company}=names;
console.log(fname);
console.log(lnm);
console.log(company);

var names2=["jyothi","hema","sravan"]
let [name,lastname,firstname]=names2
console.log(name);
console.log(lastname);
console.log(firstname);