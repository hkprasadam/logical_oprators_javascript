//------And operator--------
let x1=5;
let x2=4;

let result=!((x1>x2)&&(x1==x2));

console.log(result)
//--------or operator---------
let obj1={
       
}


let isNodejs=true;
let isDJango=false;
let exp=4;
let joinin=10;
let isrelocate=true;
let isflexible=true;

let job=((isNodejs||isDJango)&&(exp=4)&&(joinin<=15)&&(isrelocate&&isflexible))
console.log(job)

//-------conditional operators---------

//-------trenary-------
let username= "hemanth";
let password= "hemu123";

username == "hemanth" && password == "hemu123" ? console.log("login sucessfull"): console.log("login unsucessfull");

//-------optional chaining----

let obj = {
    username : "hemanth", adress :
    {
        "door_no" : "3-8-9",
        "street" :"rambo",
         "pincode":1234
    }
}
console.log(obj.adress1?.pincode)