
    // //TYPEOF

    // var a;
    // typeof a;				// "undefined"

    // a = "hello world";
    // typeof a;				// "string"

    // a = 42;
    // typeof a;				// "number"

    // a = true;
    // typeof a;				// "boolean"

    // a = null;
    // typeof a;				// "object" -- weird, bug

    // a = undefined;
    // typeof a;				// "undefined"

    // a = { b: "c" };
    // typeof a;				// "object"


    // //SOME BUILD IN METHODS

    // var a = "hello world";
    // var b = 3.14159;

    // a.length;				// 11
    // a.toUpperCase();		// "HELLO WORLD"
    // b.toFixed(2);			// "3.14"

//this in JS 

//implicit binding

    // const person = {
    //     name:"tamilvanan",
    //     sayMyName: function(){
    //         console.log(`Hello!  ${this.name}`)
    //     }
    // }

    // person.sayMyName()


// //explicit binding
// function sayMyName(){
//     console.log(`Hello!  ${this.name}`);

// }
 

    // sayMyName.call(person)

//new binding 



    // function Person(name){
    //     //this={}
    //     this.name=name;
    // }

    // const p1 = new Person("tamil");
    // const p2 = new Person("Dr.Pills");

    // console.log(p1.name, p2.name);

    // globalThis.name = "philomath";

    // function sayMyName(){
    //     console.log(`Hello!  ${this.name}`);

    // }

    // sayMyName() 


//prototype

function person(fName,lName){
    this.fName=fName;
    this.lName=lName;

}

person.prototype.getFullName=function(){
    console.log(this.fName+" "+this.lName);
}


const p1= new person("Tony","Stark");
const p2= new person("Bruce","Wayne");

// p1.getFullName=function(){
//     console.log(this.fName+" "+this.lName);
// }

// p2.getFullName=function(){
//     console.log(this.fName+" "+this.lName);
// }


p1.getFullName();
p2.getFullName();

