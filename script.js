var object;
var object2 = {
    name:"Krystian",
    job:"Izdebski"
};

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://reqres.in/api/users", true);
xhr.responseType = "json";
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function(){
    object = xhr.response;
    alert(object.name + " | " + object.job + " | " + object.id + " | " + object.createdAt);
};

xhr.send(JSON.stringify(object2));
