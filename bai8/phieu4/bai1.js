var arr1 = [1, 2, 3, 4, 1, 2, 2, 1];
var a2 = [];
var a3 = [];
a2[0] = arr1[0];
var count = 0;
for (var i = 1; i < arr1.length; i++) {
    var flag = false;
    for (var j = 0; j < a2.length; j++) {
        if (a2[j] == arr1[i]) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        count++;
        a2[count] = arr1[i];
    }
}
console.log(a2);
for(var i = 0; i < a2.length;i++){
    var k = 0;
    for(var j = 0; j < arr1.length;j++){
        if(a2[i] == arr1[j]){
            k++;
        }
    }
    a3[i] = k;
}
console.log(a3);
max = a3[0];
for(var i = 0; i < a2.length;i++){
    if(max < a3[i]){
        max = a3[i];
    }
}
for(var i = 0; i < a2.length;i++){
    if (max == a3[i]){
        console.log(a2[i]);
    }
}