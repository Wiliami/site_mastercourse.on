class ServiceGithub {
    url = 'https//api.github.com';
    client_id = '9d71a8c4106f4ea74ef9"';
    client_secret = 'f9ff9a14fad8c26a809624c6bd2007690311b4af';
    profile_response = '';

    async call(user) {
        try {
            fetch(
                `${this.url}/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
            );

            if(!this.reponse.ok) {
                throw new Error(`Error na solicitação: ${this.profile_response.status}`)
            }

            return await this.profile_response.json();
            
        } catch (error) {
            console.log('Error:', error);
            throw error;
        }

    }
}


export default ServiceGithub;