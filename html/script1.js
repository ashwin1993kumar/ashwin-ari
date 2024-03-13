function firstFunction() {
    console.log("Hurray")
}
/*let btn = document.querySelector("button")
btn.addEventListener( "click", firstFunction )*/

/*document.addEventListener( "mousemove", handler )
function handler() {
    document.querySelector(".demo").innerHTML = Math.random()
}*/

function removeHandler() {
    document.removeEventListener("mousemove",handler)
}

document.addEventListener( "hello", function ( data ) {
    console.log("Hello has called and send ", data.detail)    
})

function callCustomMethod() {
    let event = new CustomEvent( "hello", {
     detail:{name:"Ashwin"}   
    } )
    document.dispatchEvent(event)
}

/*function sum() {
    let sum = data=10
    return sum
}*/
/*const sum = (data1,data2) => {
    let sum = data1 + data2 + 10;
    return sum;
}*/
const sum = (data1,data2) => data1 + data2 + 10
console.log( 'Sum -- ', sum( 4, 5 ) )
var arr = [1, 2, 3, 4]
let newArr = arr.map( ( item ) => item * 2 )
console.log( 'Array *2', newArr )

// problem solved by arrow function
// remembers the outher context of the function

let obj = {
    name1: 'Ashwin',
    getName: function () {
        console.log( this.name1 )
        const fullName=()=> {
            console.log( this.name1 )
            console.log('my full name is -- '+this.name1+' kumar ')
        }
        fullName()
    }
}

obj.getName()

//setTimeout
let timerId = window.setTimeout( function () {
    console.log( "hello timeout" )
}, 2000 )
console.log( timerId )
clearTimeout( timerId )

//setInterval
let intervalId = window.setInterval( function () {
    console.log("hello ")
}, 1000 )

clearInterval(intervalId)