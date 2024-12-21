"use strict";

// target element 
const loginBtn = document.getElementsByClassName('login-btn')[0];
const profileTab = document.getElementsByClassName('profile')[0];


let profileName = localStorage.getItem('profileName');
console.log(profileName);

document.addEventListener('DOMContentLoaded', (e) => {
    if (profileName !== "" && profileName != null){
        loginBtn.classList.add('hidden');
        profileTab.classList.remove('hidden');
        profileTab.innerHTML = profileName;
    }
})
