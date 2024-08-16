const dic = {}
function addUser(id,nome){
    dic[id]=nome;
}

function searchUser(id) {
    return id in dic;
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

addUser(1,2);
addUser(2,2);
editUser(2,6666)
deleteUser(1)
console.log(dic)