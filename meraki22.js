var m = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over";
n=m.split(" ")
store=" "
s=" "
for(i of n){
    if(subStr==i){
        n=n+i
    }else{
        str=" "
        store+=i+str
    }
}
console.log(store)