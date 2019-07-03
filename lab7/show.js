var accountInfoList =[];

function createClick() {
    var name = document.getElementById("account");
    var deposit = document.getElementById("deposit");
    const txt =document.getElementById("textarea");
    const  obj = new Account(name.value, deposit.value);

   // var accountInfoList =[];
    accountInfoList.push(obj);
    var str = "";
    accountInfoList.forEach(myFunction);
    function myFunction(obj) {
        str = str +"Account name: " + obj.name + " Balance: " + obj.deposit + "\n"; 
    }
    txt.value = str;
    name.value = "";
    deposit.value = "";

    function Account(name, deposit) {
        this.name = name;
        this.deposit = deposit;
    }
}

function attachHandler(){
    var createBtn = document.getElementById("create");
    createBtn.onclick = createClick;
  
}
window.onload = attachHandler;