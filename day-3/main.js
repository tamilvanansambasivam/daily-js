let a = 10;
//neested function
function outer() {
    let b = 20;

    function inner() {
        var c = 30;
        console.log(a, b, c);

    }

    inner();
}

outer();