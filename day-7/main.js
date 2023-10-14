const p1= new Promise(function(res, rej){
  setTimeout(()=>{
    res("promise resolved")
  },20000)
})


const p2= new Promise(function(res, rej){
  setTimeout(()=>{
    res("promise resolved")
  },40000)
})

async function handlePromise(){
  console.log("hello coder")
  const value=await p1;
  console.log(value)


  console.log("hello coder ")
  const value2=await p2;
  console.log(value2)


}

handlePromise()
