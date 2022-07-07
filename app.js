//elementleri secme

const githupForm=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearLastusers=document.getElementById("clear-last-users");

const lastUsers=document.getElementById("last-users");

const github=new GitHub();
const ui=new UI();


//eventleri cagirma fonksiyonu
eventListeners();

function eventListeners(){
    githupForm.addEventListener("submit",getData);
    clearLastusers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);//ekranimiz yenilendikce son arananlar ekrana yuklensin diye **

}
function getData(e){
    let username=nameInput.value.trim();
    if(username===""){
        alert("username kismi bos kalamaz")
    }
    else{
        github.getHitHubdata(username)//bu fonksiyonda tanimladigimiz usernameyi github.js teki fonksiyona gonderdik
        .then(response=>{
            if(response.user.message==="Not Found"){
                //hata mesaji
                ui.showErrorMessage("kullanici bulunamadi");
            }
            else{   
                ui.addSearchedUsersToUI(username);
                Storage.addSearchedUsersToStorage(username);
               ui.showUserInfo(response.user);
               ui.showRepoInfo(response.repo);
            }
        }).catch(err=> ui.showErrorMessage("kullanici bulunamadi"));
    }





    ui.clearinputfiled();
    e.preventDefault();
}
function clearAllSearched(){
    if (confirm(("emin misiniz"))){
        Storage.clearAllSearchedUsers();//storageden silecek
        ui.clearAllSearchedFromUI();

    }
}
function getAllSearched(){
    //arananlari storageden al ve ui ekle
    let users=Storage.getSearchedUsersFromStorage();
    let result="";

users.forEach(user => {
     result+=` <li class="list-group-item">${user}</li> `; 
    
});
   lastUsers.innerHTML=result; 
}

