// CHAPTER # 21-25 
// task # 1
// var firstName=prompt("Eneter you first name ");
// var lastName=prompt("Eneter you first name ");
// var fullName=firstName+" "+lastName;
// document.write("Hello "+fullName)


// CHAPTER # 21-25 
// task # 2

// var favoriteModel=prompt("Enter your favorite model phone");
// var lenthOfString=favoriteModel.length;
// document.write("My favorit phone is : "+favoriteModel+"<br>"+"Length of string is : "+lenthOfString);


// CHAPTER # 21-25 
// task # 3


// var string="PAkISTANI";
// var indexOfN=string.indexOf('N');
// document.write("string : "+string+"<br>"+"index of 'N' : "+indexOfN);

// CHAPTER # 21-25 
// task # 4



// var string="Hello World";
// var lastindexOfl=string.lastIndexOf('l');
// document.write("string : "+string+"<br>"+" last index of 'l' : "+lastindexOfl);

// CHAPTER # 21-25 
// task # 5


// var string="PAkISTANI";
// var char=string.charAt(3);
// document.write("string : "+string+"<br>"+"charcter at index 3 is : "+char );


// CHAPTER # 21-25 
// task # 6

// var firstName=prompt("Eneter you first name ");
// var lastName=prompt("Eneter you first name ");
// var fullName= firstName.concat(lastName);
// document.write("Hello "+fullName)

// CHAPTER # 21-25 
// task # 7


// var city="hyderabad"
// var afterChange=city.replace("hyder","islam");
// document.write("city : "+city+"<br>"+"After Replecment : "+afterChange);


// CHAPTER # 21-25 
// task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var afterChange=message.replace("and","&");
// document.write(afterChange)


// CHAPTER # 21-25 
// // task # 9

// var userInput=prompt("Enter your input");
// var afterChange=userInput.toLocaleUpperCase();
// document.write("User Input :"+userInput +"<br>"+"Upper case : "+afterChange);


// CHAPTER # 21-25 
// // task # 10


// var userInput=prompt("Enter your input");
// var afterChange=userInput.slice(0,1);
// afterChange=afterChange.toUpperCase();
// var remainingChar=userInput.slice(1);
// remainingChar=remainingChar.toLowerCase();
// var finalChange=afterChange+remainingChar;
// document.write("User Input :"+userInput +"<br>"+"Upper case : "+finalChange);



// CHAPTER # 21-25 
// // task # 11


// var num=34.34;
// var string=num.toString();
// document.write(string);





// CHAPTER # 26-30
// // task # 1


// var num=3.4521;
// var round=Math.round(num);
// var floor=Math.floor(num);
// var ciel=Math.ceil(num);
// document.write("number : "+num+"<br> rounded off value  : "+round+"<br> foor value : "+floor+ "<br> ceil value : "+ciel);



// CHAPTER # 26-30
// // task # 2

// var num= -3.4521;
// var round=Math.round(num);
// var floor=Math.floor(num);
// var ciel=Math.ceil(num);
// document.write("number : "+num+"<br> rounded off value  : "+round+"<br> foor value : "+floor+ "<br> ceil value : "+ciel);




// CHAPTER # 26-30
// // task # 3


// var num=-4;
// var num1=Math.abs(num);
// document.write("the absolte value of "+num+" is: "+num1)


// CHAPTER # 26-30
// // task # 4


// var num=Math.random()*6;
//  num=Math.ceil(num);
//  console.log(num);
//  document.write("Random dice value is :"+num)

// CHAPTER # 26-30
// // task # 5



// var num=Math.random()*2;
//  num=Math.ceil(num);
//  console.log(num);
//  if(num===2){
//  document.write("Random coin value : Heads :"+num)}
//  else {
//     document.write("Random coin value : Tails :"+num)}


// CHAPTER # 26-30
// // task # 6
    
// var num=Math.random()*100;
// num=Math.ceil(num);
// console.log(num);
// document.write("Random number between 1 and 100 is : "+num);

// CHAPTER # 26-30
// // task # 7

// var weight=+prompt("Enter your weight");
// document.write("The weight of user is :"+weight+" kilogram");


// CHAPTER # 26-30
//  task # 8

// var usernumber=prompt("Enter you number")
// console.log(usernumber)
// var secretNumber=Math.random()*2;
// secretNumber=Math.ceil(secretNumber);
// console.log(secretNumber)

// if(secretNumber === usernumber){
//     alert("congratulate");
// }
// else{
//     alert("Try again!");
// }
 

// CHAPTER # 31-34
//  task # 1
// var mydate=new Date();
// document.write(mydate)


// CHAPTER # 31-34
//  task # 2
var months=[]
var mydate=new Date();
document.write(mydate)
var month=mydate.getMonth()
console.log(month)
 







