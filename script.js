var object;
var object2 = {
    name: "Krystian",
    job: "Izdebski"
};

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://reqres.in/api/users", true);
xhr.onload = function(){
    object = JSON.parse(xhr.responseText);
    alert(object.name + " | " + object.job + " | " + object.id + " | " + object.createdAt);
};
xhr.send(object2);
