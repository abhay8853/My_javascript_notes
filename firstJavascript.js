/*let marks =[1,2,3,4,5,6,]
console.log(marks)  
marks[0]=21
for(let array of marks  ){
    console.log(array)
}
let marks1=[85,97,44,37,76,60]    
let sum =0
for (let i =0;i<marks1.length;i++){
   sum=sum+marks1[i]
   console.log(sum)
}
let average =(sum/marks1.length)
console.log(average)
let prices=[250,645,300,900,50]
for(i=0;i<prices.length;i++){
    let offer =prices[i]/10
    prices[i]=prices[i]-offer
    
}
console.log(prices)
let arr1=[1,2,3,4,5,6,]
let arr2=[7,8,9,10]
let result=arr1.toString()
console.log(result)

let arr=[1,2,5,6,3]
let result = arr.toString()
console.log(result)
arr.splice(1,1)
let array=[1,2,3,4,5,6]
for(let i =1;i<array.length;i++){
    console.log(array[i])
}
let arr1=[1,2,3,4,4,5,5,]
for(let element of arr1){
    console.log(element)

}
 function sum(a,b){
    console.log(a+b)
 }
const arrowMult=(a,b)=>{
console.log(a*b)
}
 let arr=[1,2,3,5,5,,66,,655,,5]
 const output=arr.reduce((prev,curr)=> {
      return prev>curr ? prev: curr

 })
 console.log(output)
 
 
let element=document.getElementsByClassName("heading")
console.dir(element)
 let element1 =document.getElementsByTagName("p1")
console.dir(element1)
let div =document.querySelector("div");
console.log(div) ;
let id =div.getAttribute("id")
console.log(id)
let para =document.querySelector("p")
console.log(para.getAttribute("class"))
div.style.backgroundColor="yellow"// change background from java script
let newButton=document.createElement("button")
newButton.innerText="cilck me again! again"
newButton.style.backgroundColor="yellow"
document.querySelector("body").prepend(newButton)
let para1=document.querySelector("p2")
 let para =document.querySelectorAll("p")
let element=document.querySelector("h1")

let para1=document.querySelector("p1")
console.log(para1.getAttribute("class"))
console.log(para1.setAttribute("class","new class"))
let newElement=document.createElement("p2")
newElement.textContent="This is new element"
let p1=document.querySelector("p1")
p1.appendChild(newElement)
let button1=document.querySelector("#button1")
button1.onclick=(e)=>{
console.log(e)

}
let changeMode=document.querySelector("#mode")
let currMode="light"
changeMode.addEventListener("click",()=> {
if(currMode==="light"){
    currMode="dark"
document.querySelector("body").style.backgroundColor="black"
}else{
    currMode="light"
    document.querySelector("body").style.backgroundColor="white"
}
console.log(currMode)
})*/
//operator 
let a=10
let b =20
let sum =a+b
console.log("sum=",sum)
let a1=15
let b1=4
let remainder=a1%b1
console.log("remainder=",remainder)

/*if(10<15){
   console.log("10 is greater than 15")
}
let age =19
if(age<18){
console.log("you are not eligible for voting ")
}else if(age>18){
    console.log("you are eligible for voting ")
}*/
let age=29
if(age<18){
    console.log("you can not watch youtube ")
}else if(age>=18 && age<27){
console.log("you can watch youtube ")
}else{
console.log("you are also not elgible")
}


let pass=49;

let bool=(pass>=50)?"eligible for admission ":"not eligible";
console.log(bool);
//switch

let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  // ...
  default:
    console.log("Invalid day");
    break;
}

//Loop

  for(let i =0;i<10;i++){
    console.log(i)
  }  

let i =1
while(i<5){
    console.log("i")
    i++
}
let i1=20


do{
    console.log("hello how are you ")
    i++

}while(i<=21)
//for in - object properties (enumerable properties )
let object={a:1,b:2,c:3}
    for (let key in object){
        console.log(key+":"+object[key])

    }
    
let person ={
name:"abhay",
age:19,
City:"hellil"
}
for(let key in person){
    console.log(key+":"+person[key])
}

let message="hello"
for(let char of message){
    console.log(char)
}


let number=34
do{
    console.log("hello")
    number++
}while(number<=35)
    let mark=30
    let passingMark=(pass>=20)?"he is pass in exam ":"he is not passed "
    console.log(passingMark)
    
    for(let i =1;i<=100;i++){
        if(i%2===0){
            console.log("even=",i)
        }else{
            console.log("odd number",i)
        }
        
    }
  
  for(let i=1;i<10;i++){
    result=i*15
    console.log(result)
  }
// strings 
let greeting= "hello"
let name="abhay"
let message1 =greeting + ","+name+"!"
console.log(message1)
 //using template literals
 let  tempMessage=`${greeting},${name}!`

 let str="hello world "
 console.log(str.length)
 console.log(str[0])
 console.log(str.toUpperCase())
 console.log(str.toLowerCase())
 console.log(str.includes("world"))//check true or false 
 console.log(str.slice(3,11))//return new string without modifying orginial string
 console.log(str.replace("world","universe"))

 //array
 let array1=[1,2,3]
 let array2=[4,5,6]
 let newarray=array1.concat(array2)
 console.log(newarray)
 array1.push(4)
 console.log(array1)
 let newarray1=array1.toString()
 console.log(newarray)
 //function
 function hello(name){
    console.log("hello"+name+"!")
 }
 hello("abhay")
//arrow function

const add = (a,b) => {
return a+b
}
console.log(add(23,45))

let numbers=[1,23,4,4,]
let doubled=numbers.map(num=>num*2)
console.log( doubled)

let modebtn=document.querySelector("#mode")
let currMode="light"
modebtn.addEventListener("click",()=>{
if(currMode==="light"){
    currMode="dark" 
    document.querySelector("body").style.backgroundColor="black"
}else{
    currMode="light"
    document.querySelector("body").style.backgroundColor="white"
   console.log(currMode)
}
})
 //dom mainipulation
 let newElement=document.querySelector('h1')
 newElement.innerHTML='i am new '
 document.body.appendChild(newElement)

 for(leti=1;i<=100;i++){
    if(i%2===0){
        console.log("even=",i)

    }else{
        console.log("odd=",i)
    }
 }
 for(let i=1;i<=10;i++){
     let result=16*i
    console.log(result)
 }
 let i2=1
 while(i2<=10){
    console.log(5*i2)
    i2++
 }