function foo() {
	return 42;
}

foo.bar = "hello world";

console.log(typeof foo)	;	// "function"
console.log(typeof foo());		// "number"
console.log(typeof foo.bar);		// "string"

//array


var arr = [
	"hello world",
	42,
	true
];

arr[0];			// "hello world"
arr[1];			// 42
arr[2];			// true
arr.length;		// 3

console.log(typeof arr);		// "object"