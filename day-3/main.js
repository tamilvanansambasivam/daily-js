// let a = 10;
// //NESTED FUNCTION
// function outer() {
//     let b = 20;

//     function inner() {
//         var c = 30;
//         console.log(a, b, c);

//     }

//     inner();
// }

// outer();

//CLOSURE

// function outer(){
//     let counter=0;
//     function inner(){
//         counter++;
//         console.log(counter);
//     }
//     inner();
// }
// outer();outer();


function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}

const fn = outer();
fn()
fn()
fn()

