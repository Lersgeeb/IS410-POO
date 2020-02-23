function removeItem(e){
    parent = e.parentNode.parentNode;
    parent.remove();
    updateAmount();
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
        updateAmount();
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
    var newRow = table_body.insertRow(-1);
    newRow.innerHTML = trContent;
}

function changeQuantUnit(e,unit){
    var row = e.parentNode.parentNode;
    var quantSpan = e.parentNode.getElementsByTagName("span")[0];
    quantSpan.innerHTML = parseInt(quantSpan.innerHTML) + unit ;
    
    
    price = row.getElementsByClassName("price")[0].innerHTML;
    row.getElementsByClassName("total")[0].innerHTML = price * parseInt(quantSpan.innerHTML);
    updateAmount();
}


function updateAmount(){
    var tbody = document.getElementsByTagName("tbody")[0];
    var totals = tbody.getElementsByClassName("total");
    sum = 0;
    for(total of totals){
        sum += parseInt(total.innerHTML);
    }
    
    document.getElementsByTagName("tfoot")[0].getElementsByClassName("amount")[0].innerHTML = sum;
    
}