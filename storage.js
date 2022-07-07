class Storage{
    static getSearchedUsersFromStorage(){
        // kullanicilari almak icin 
        let users;
        if(localStorage.getItem("searched")===null){
            users=[];
        }
        else{
            users=JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedUsersToStorage(username){
        //kullanicilari storage ekleme
        let users=this.getSearchedUsersFromStorage();
        // indexoff
        if(users.indexOf(username)===-1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));

    }
    static clearAllSearchedUsers(){
        localStorage.removeItem("searched");
    }
}