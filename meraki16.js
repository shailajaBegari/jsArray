var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
even_sum=0
odd_sum=0
for(i=0;i<elements.length;i++){
    if(elements[i]%2==0){
        even_sum+=elements[i]
    }else{
        odd_sum+=elements[i]
    }
}
console.log("even",even_sum)
console.log("odd",odd_sum)

console.log("*******************************")
//////***************************************** */
even=0
odd=0
for(var i of elements){
    if(i%2==0){
        even+=i
    }else{
        odd+=i
    }
}
console.log(even)
console.log(odd)