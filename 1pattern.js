// var str=" "
// for(i=0;i<=5;i++){
//     for(j=1;j<=i;j++){
//         str+=i-j
//     }
//     str+="\n"
// }
// console.log(str)


///************************ pyramid pattern*/

var r=5;
var str=" "
for(let i=0;i<=r;i++){
    for(let k=0;k<=(r-i);k++){
        str+=" "
    }
        for(let j=1;j<=i;j++){
            str+="* "
        }
        str+="\n"
    }
console.log(str)