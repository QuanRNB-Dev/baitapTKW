var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var a3 = [];
var a2 = [];

console.log(arr1);
a3[0] = arr1[0];
var k = 0;
for (var i = 1; i < arr1.length; i++) {
    var flag = false;
    for (var j = 0; j < a3.length; j++) {
        if (a3[j] == arr1[i]) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        k++;
        a3[k] = arr1[i]
    }
}
console.log(a3);

for (var i = 0; i < a3.length; i++) {
    var count = 0;
    for (var j = 0; j < arr1.length; j++) {
        if (a3[i] == arr1[j]){
            count++;
        }
    }
    a2[i]=count;
}
console.log(a2);

for(var i = 0; i < a3.length;i++){
    if(a2[i]!= 1){
    console.log("Kết quả: " , a3[i], " xuất hiện ", a2[i]," lần");
    }
}