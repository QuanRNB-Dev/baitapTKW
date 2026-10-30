var st = "hoc Java that vi dieu";
var mang = st.split("");
var counta = 0;
var counth = 0;
for(var i = 0; i < mang.length;i++){
    if("a" == mang[i]){
        counta++;
    }
    if("h" == mang[i]){
        counth++;
    }
}
console.log(counta, counth)
if(counta == counth){
    console.log("h xuất hiện ", counth," lần, a xuất hiện ", counth," lần vậy số lượng bằng nhau");
}
else{
    console.log("a không bằng h");
}