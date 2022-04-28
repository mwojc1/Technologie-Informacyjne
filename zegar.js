
function curtime(){

    var current = new Date();
    result = "";
    document.getElementById("zegar").innerHTML = result.concat(current.getHours(),":",current.getMinutes(),":",current.getSeconds());

}
