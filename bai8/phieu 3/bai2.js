var st1 ="abcd";
var st2 ="cbad";
var temp1 = st1.split("");
temp1.sort();
var temp2 = st2.split("");
temp2.sort();
var flag = false;
for(var i = 0; i < temp1.length;i++){
    if(temp1[i]!=temp2[i]){
        flag=true;
        break;
    }
}

console.log(!flag);