function add(a){
    return function(b){
        return a+b;
    }
}

//currying

console.log(add(10)(20))

