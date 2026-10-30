var st = "hello world";
var mang = st.split(" ");
for(var i = 0; i < mang.length;i++){
    console.log(mang[i].charAt(0).toUpperCase()+mang[i].slice(1));
}