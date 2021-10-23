var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
count=0
count1=0
for(i=0;i<elements.length;i++){
    if(elements[i]%2==0){
        count++
    }else{
        count1++
    }
    
}
console.log("even",count)
console.log("odd",count1)