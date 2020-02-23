function removeItem(e){
    parent = e.parentNode.parentNode;
    parent.remove();
    console.log(parent);
}

function addItem(){
    var name = document.getElementById("name");
    var quant = document.getElementById("quant")
    var price = document.getElementById("price");


    if(name.value && quant.value && price.value){
        createItem(name.value,quant.value,price.value);
        name.value = "";
        quant.value = "";
        price.value = "";
    }    
}

function createItem(name,quant,price){
    
    var total = quant*price
    var trContent = `   <td class="name">${name}</td>
                        <td class="quant">
                            <span>${quant}</span> 
                            <button onclick="changeQuantUnit(this, -1)">-</button>
                            <button onclick="changeQuantUnit(this, 1)">+</button>
                        </td>
                        <td class="price">${price}</td>
                        <td class="total">${total}</td>
                        <td><button onclick="removeItem(this)">remove</button></td>`

    var table_body = document.getElementsByTagName('tbody')[0];
    var newRow = table_body.insertRow(table_body.rows.length);
    newRow.innerHTML = trContent;
}

function changeQuantUnit(e,unit){
    var row = e.parentNode.parentNode;
    var quantSpan = e.parentNode.getElementsByTagName("span")[0];
    quantSpan.innerHTML = parseInt(quantSpan.innerHTML) + unit ;
    
    
    price = row.getElementsByClassName("price")[0].innerHTML;
    row.getElementsByClassName("total")[0].innerHTML = price * parseInt(quantSpan.innerHTML);
}


