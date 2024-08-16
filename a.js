const dic = {}
function addUser(id,nome){
    dic[id]=nome;
}

function searchUser(id) {
    if(id in dic){return dic[id]};
}

function editUser(id,nome){
    if(searchUser(id)){
        dic[id]=nome;
    }
}
function deleteUser(id){
    if(searchUser(id)){
        delete dic[id];
    }
}

addUser(1,"jorge");
addUser(2,"mike");
editUser(2,"Rodolf")
console.log(searchUser(1))
console.log(dic)