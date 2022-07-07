class GitHub{
    constructor(){
        this.url="https://api.github.com/users/";
    }
    async getHitHubdata(username){
        const responseUser=await fetch(this.url+username);
        const responseRepo=await fetch(this.url+username+"/repos");
        //bunlari bir degiskene atamamiz lazim\
        const userData=await responseUser.json();
        const repoData=await responseRepo.json();
        //sonra bunlari donmemiz lazim biz obje seklinde donduk

        return{
            user:userData,
            repo:repoData
        }
        

    }
}