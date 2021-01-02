var object


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users/2", true);
xhr.onload = function(){
    object = JSON.parse(xhr.responseText);
    alert(object.data.email);
};
xhr.send();
