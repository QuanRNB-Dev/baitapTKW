var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var name = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    if (i < 3) {
        console.log((i + 1) + name[i+1] + " choice is " + color[i] );
    } else {
        console.log((i + 1) + name[0] + " choice is " + color[i]);
    }
}