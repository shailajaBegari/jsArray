// var list1=['m','a','l','a','y','a','l','a','m'];
var list1="shailaja"
var rev=[];
for(var i=list1.length-1;i>=0;i--){
    rev.push(list1[i]);
}
console.log(rev)
var count=0;
for(var j=0;j<list1.length;j++){
    if (rev[j]===list1[j]){
        count++;
// console.log(count)
}
}
if(count===list1.length){
    console.log("pallindrome");
}else{
    console.log("not a pallindrome");
}


