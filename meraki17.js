var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
even=0
odd=0
for(i=0;i<elements.length;i++){
    if(elements[i]%2==0){
        even+=elements[i]
    }else{
        odd+=elements[i]

    }
}
console.log("avg",(even+odd)/2)
///****************** */
console.log("**********************")

////*********************** */
even=0
odd=0
for(var i of elements){
    if(i%2==0){
        even+=i
    }else{
        odd+=i
    }
}
console.log((even+odd)/2)