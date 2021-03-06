var users = {};
var url = '../UserRegisterBackend/api/usersAPI.php';

function getUser(){
    axios({
        method:'GET',
        url: url, //Por lo general se usara dirreciones absolutas
        responsetype:'json'
    }).then( res => {
        //console.log(res);
        users = res.data;
        renderTableBody();
    }).catch(error=>{
        console.error(error);
    });
}

function removeUser(userIndex){
    console.log(`Eliminar el usuario con el indice ${userIndex}`)
    axios({
        method:'DELETE',
        url:`${url}?id=${userIndex}`, //Por lo general se usara dirreciones absolutas
        responsetype:'json'
    }).then( res => {
        //console.log(res);
        getUser();
    }).catch(error=>{
        console.error(error);
    });
    
}

function saveUser(){
    nameInput = document.getElementById('nameInput');
    lastnameInput = document.getElementById('lastnameInput');
    dateInput = document.getElementById('dateInput');
    countryInput = document.getElementById('countryInput');

    console.log(dateInput.value)

    if(nameInput.value && lastnameInput.value && dateInput.value && countryInput.value){
        document.getElementById('saveButton').disabled = true;
        document.getElementById('saveButton').innerHTML = 'Guardando...';

        let user = 
        {
            name:nameInput.value,
            lastname:lastnameInput.value,
            birthday:dateInput.value,
            country:countryInput.value
        }

        axios({
            method:'POST',
            url: url, //Por lo general se usara dirreciones absolutas
            responsetype:'json',
            data:user
        }).then( res => {
            //console.log(res);
            getUser();
            document.getElementById('saveButton').disabled = false;
            document.getElementById('saveButton').innerHTML = 'Guardar';
        }).catch(error=>{
            console.error(error);
        });
    }
}


function updateUser(userIndex){
    nameInput = document.getElementById('nameInput');
    lastnameInput = document.getElementById('lastnameInput');
    dateInput = document.getElementById('dateInput');
    countryInput = document.getElementById('countryInput');

    
    if(nameInput.value && lastnameInput.value && dateInput.value && countryInput.value){
        console.log('editar el usuario' + userIndex)
        let user = 
        {
            name:nameInput.value,
            lastname:lastnameInput.value,
            birthday:dateInput.value,
            country:countryInput.value
        }

        axios({
            method:'PUT',
            url:`${url}?id=${userIndex}`, //Por lo general se usara dirreciones absolutas
            responsetype:'json',
            data:user
        }).then( res => {
            //console.log(res);
            getUser();
        }).catch(error=>{
            console.error(error);
        });
    }
}



function render(){
    renderTableBody();
    getUser();
}

function renderTableBody(){
    tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    for(key in users){
        tableBody.innerHTML += `<tr>
                                    <th>${users[key].name}</th>
                                    <td>${users[key].lastname}</td>
                                    <td>${users[key].birthday}</td>
                                    <td>${users[key].country}</td>
                                    <td style="text-align:center;"><button onclick="removeUser('${key}')">X</button></td>
                                    <td style="text-align:center;"><button onclick="updateUser('${key}')">Editar</button></td>
                                </tr>`;
    }

}



render();