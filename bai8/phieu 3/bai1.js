var arr1 = [1, 0, 2, 3, 4];
var arr2 = [3, 5, 6, 7, 8, 13];
var n = arr1.length;
var m = arr2.length;
var a3 =[];
if(n<m){
    for(var i = 0; i < n;i++){
    a3[i]=arr1[i] + arr2[i];
    }
}
for(var i = n; i < m;i++){
    a3[i] =arr2[i];
}
console.log(a3)