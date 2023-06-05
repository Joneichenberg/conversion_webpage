//function for celsius to fahrenheit and vice versa
function temp_calc(){
    var c = document.getElementById("c").value;
    var fahrenheit = (c * 9/5) + 32;
    document.getElementById("f").value = fahrenheit;
}

function weight_calc(){
    var k = document.getElementById("kg").value;
    var pounds = k * 2.2
    document.getElementById("lbs").value = pounds;
}

function distance_calc(){
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("m").value = m
}

