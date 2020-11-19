class Github{
    constructor(){
        this.client_id='e876ba3f9609b4818b47';
        this.client_secret='bbaed175f7fae368a50c4b3546a12c9c46775c61';
        this.repos_count=5;
        this.repost_sort='created:asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);



        const profile=await profileResponse.json();
        const repos=await repoResponse.json();

        return {
            profile,
            repos
        }

    };
}; 