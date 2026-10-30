var st = "I love You";
var result ="";
for (var i = 0; i < st.length; i++){
    if(st.charAt(i) == st.charAt(i).toUpperCase()){
        result += st.charAt(i).toLowerCase();
    }else{
        result +=st.charAt(i).toUpperCase();
    }
}
console.log(result)