var money = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var c=0
var d=0
var l=0
for(var i=0;i<money.length;i++){
    if (money[i]<100000){
    d=d+1}

    else if (money[i]>100000 && money[i]<10000000){
    l=l+1}
    else if(money[i]>10000000){
    c=c+1  } 
}
console.log("diwale",d)
console.log("lakpati",l)
console.log("corodpati",c)


console.log("*************************************")

///*********************** */
// for(i of money){
//     if (i<100000){
//     d=d+1}
// else if(i>100000 && i<10000000){
//     l=l+1}
// else if(i>10000000){
//     c=c+1   }
// }
// console.log("diwale",d)
// console.log("lakpati",l)
// console.log("corodpati",c)
