/******************** Var keyword */
/** var supports global or function level scope - not block level scope */
var course='Zero to Hero'
console.log(course)
var course='Zero to Hero in LWC'
console.log(course)
console.log(window.course)

function abc(){
    var anothercourse="hero in LWC function"
    console.log(anothercourse)
}

abc()

//block scope
if(2===2){
    var x=10
}
console.log(window.x)

/************* Let keyword */
/** Let supports block level and function level scope not window level scope */
let course16='Zero to Hero let'
course16='Zero to Hero in LWC let'
console.log(course16)
console.log(window.course16) //doesn't supports

function abc1(){
    let x="Ashwin"
    console.log(x)
}

abc1()

//block scope
if(2===2){
    let x1=10
    console.log(x1)
}
//console.log(x1)

/************* const keyword */
/** Let supports block level and function level scope not window level scope */

const course2='Zero to Hero const'
console.log(course2)
//const course2='lwc' //doesn't supports
console.log(window.course2) //doesn't supports

function abc2(){
    let x2="Ashwin const"
    console.log(x2)
}

abc2()

//block scope
if(2===2){
    let x2=20
    console.log(x2)
}

// console.log(x2) //doesn't supports

/*************  JS Datatypes (8) *********/
// number
var x=10.11
console.log(typeof x)

//bit int
var y=103921392040293n
console.log(typeof y)

//string
var name='Ashwin'
console.log(typeof name)

//Boolean
var isDay = true
console.log(typeof isDay)

//undefined
var z
console.log(typeof z)

//object
var obj={}
console.log(typeof obj)

//array
var arr=[]
console.log(typeof arr)

//symbol
var sym= Symbol("id")
console.log(typeof sym)

//null
var x1=10
x1=null
console.log(typeof x1)

/**************** Comparision ************* */
//1.Normal comparision(==)
    console.log(3=="3") //datatype will not checked
//2.Strict comparision(===)
console.log( 3 === 3 )  // datatype and value will be checked
    
/**************** Spread Operator ************* */

//1.Array
var arr = ["a", "b", "c"];
console.log( arr );
console.log( arr[0] );//array index starts with 0

//2.Objects (key,value)
var obj = {
    "name": "salesforce",
    "age": 23,
    "full name":"Zero to Hero"
}
console.log( obj.name );
console.log( obj["full name"] );
obj.hobbies = "cricket"
console.log( obj );

//3. Expanding of String
let greeting = "Hello Everyone";
let charlist = [...greeting];
console.log( charlist );//print all the characters in array format
console.log( charlist[0] );//print 1st array element

// 4. Combining Arrays
let arr1 = ["amazon", "google"]
let arr2 = ["facebook", "insta"]
let arr3 = [...arr1, ...arr2]
console.log( arr3 )

//5. Adding the values to an array
let arr4 = ["a", "b", "c","kumar"]
let arr5 = ["ashwin", ...arr4]
console.log( arr5 )

// 6. Combining Objects
let obj1 = { name: "Salesforce", age: 23 }
let obj2 = { name: "Facebook", age: 55 }
let obj3 = { ...obj1, ...obj2 }
console.log( obj3 )

// 7. Shallow copy
let arr10 = ["x", "y", "z"]
arr10.push( 20 )
console.log( arr10 )
var arr11 = arr10
arr11.push( 'Ashwin' )
console.log( arr10 ) // takes the reference and adds "Ashwin" to arr10 also
console.log( arr11 ) 

let arr12 = ["a", "b", "c"]
arr10.push( 20 )
var arr13 = [...arr12]
arr13.push( 'Kumar' )
console.log( arr12 ) // doesnt takes the reference and adds "Ashwin" to arr13 only
console.log( arr13 ) 

// 8.Nested copy
var arrObj = [
    {name :"Ashwin"},
    {name:"Sfdc"}
]
/*var arrObj1 =[...arrObj]
console.log( arrObj1 )
arrObj1[0].name = "Superman"
console.log( arrObj1 )
console.log( arrObj )*/
// Hack for nested copy spread operator doesnt works on object array

var arrObj2 =JSON.parse(JSON.stringify(arrObj))
arrObj2[0].name = "Superman1"
console.log( arrObj2 )
console.log( arrObj )


/**************** Destructuring ************* */
//1.Array restructuring
let arr14 = ["amazon", "google"]
//let cmp1 = arr[0]
//let cmp2 = arr[1]

let [cmp1, cmp2] = arr
console.log( cmp1 )
console.log( cmp2 )

//2.Object restructuring
let options1 = {
    title:"Hero",
    age :23,
    type:"CRM"
}
    
//var title = options1.title
//var age = options1.age

let {title, age, type} = options1
console.log( title )
console.log( age )
console.log( type )

/**************** String Interpolation ************* */

var name1 = "sales"
var name2 = "force" 
console.log( `Name is ${name1}` )
var a = 10
var b = 8
console.log( `sum of ${a} and ${b} is ${a + b}` )
var recordId = 9382989281
console.log( `http://salesforce.com/${recordId}` )

/**************** String Methods ************* */
let str = "Hello guys great day Hope same for u"
//1.includes() : check string contains specified string
let check = str.includes( "guys" )
console.log( check )

//2.indexof() : returns the position of 1st occurence of a specified string
let index = str.indexOf( "great" )
console.log( index )

//3.startsWith() : begins with specified string or not
console.log( str.startsWith("Hello") )

//4.Slice() :   extracts parts of string and returns as new string
let newstr = str.slice( 0, 5 )
console.log( newstr )

//5.toLowerCase()   :   converts string to lowercase letter
let x10 = "My name is Ashwin"
console.log( x10.toLowerCase() );
console.log( x10.toUpperCase() );

//6.trim()    :   removes white spaces in a string
let searchtxt = "       Salesforce lwc  "
console.log( searchtxt.trim() )

/**************** Oject/JSON Operations ************* */
let obj21 = {
    name: "salesforce",
    age:28,
    dob:'01/01/2000'
}
//1.Object.Keys()
console.log( Object.keys( obj21 ) )
//2.Object.values()
console.log( Object.values( obj21 ) )
//3.JSON.stringify()
let lstr = JSON.stringify( obj21)
console.log(lstr)
//3.JSON.parse()
console.log( JSON.parse( lstr ) )


/**************** Array Methods ************* */
let arr15 = [2, 3, 5, 7, 9, 10]

//syntax
//arr15.methodName( function ( currentItem, index, actualArray ){ } )

//1.map()
let newArray = arr15.map( function ( currentItem, index, array ) {
    console.log( `currentitem - ${currentItem} index- ${index}, array - ${array}` )
    return currentItem*2
})
console.log(arr15)
console.log( newArray )

//2.filter()
let newArray1 = arr15.filter( function ( currentItem, index, array ) {
    return currentItem>5
})
console.log( 'filtered Arr -- ' + newArray1 )

//3.every()

let arr16 = [32, 33, 18, 40]
let newArray2 = arr16.every( function ( currentItem) {
    return currentItem>=18
})
console.log( 'Every Arr -- ' + newArray2 )

//4.some()

let arr17 = [32, 33, 18, 40]
let newArray3 = arr16.some( function ( currentItem) {
    return currentItem>32
})
console.log( 'Some Arr -- ' + newArray3 )

//5.sort() of string
var names = ["Ashwin", "Kumar", "Sai", "Vijay"]
console.log( names.sort() )
//5.sort() of numbers
var score = [10,39,18,22,54]
console.log( score.sort() ) // Ascending
console.log( score.sort( function ( a, b ) { return b - a } ) ) //Descending

//6.reduce()
//arr15.methodName( function ( total , currentValue, index, array ){ },intialValue )

let num1 = [12, 78, 30]
let sum = num1.reduce( function ( total, currentItem ) {
    return total+currentItem
}, 0 )
console.log( sum )

//7.forEach()   : forEach doesn't returns value, Maps always returns value
num1.forEach( function ( currentItem ) {
    console.log(currentItem)
})

/**************** Promise ************* */
/*Promise has 3 states
1.  pending()
2.  fulfilled()
3.  rejected()*/

/*function checkIsSuccess(data) {
    return new Promise( function ( resolve, reject ) {
        if ( data === "success" ) {
            return resolve( "successfully executed" )    
        } else {
            return resolve( "unsuccessfully executed" )    
        }
})    
}
checkIsSuccess( 'success' ).then( function ( result ) {
    console.log(result)  
} ).catch( function ( error ) {
    console.log(error)
} ) */

/*let element = document.querySelector( 'div' )
console.log(element)*/