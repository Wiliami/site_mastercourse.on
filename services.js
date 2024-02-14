import ServiceGithub from "./ServiceGithub";

const serviceGithub = new ServiceGithub();
serviceGithub.call('Wiliami')
.then(profileData => console.log(profileData))
.catch(error => console.error(error));