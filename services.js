import ServiceGithub from "./ServiceGithub.js";

const serviceGithub = new ServiceGithub();
serviceGithub.finder('Wiliami')
.then(profileData => console.log(profileData))
.catch(error => console.error(error));