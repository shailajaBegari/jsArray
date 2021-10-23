var numbers=[50, 40, 23, 7000, 560, 12, 5, 10, 7] 
var max=0
var sec=0
for(let i=0;i<numbers.length;i++){
if(numbers[i]>max){
if(max>sec){
    sec=max
        }
max=numbers[i]
    }
    else if(numbers[i]>sec){
        sec=numbers[i]
        }
}
console.log(max)
console.log(sec)

