"use strict";

// target element 
const loginBtn = document.getElementsByClassName('login')[0];
const profileTab = document.getElementsByClassName('profile')[0];


let profileName = "";

document.addEventListener('DOMContentLoaded', (e) => {
    if (profileName !== ""){
        loginBtn.classList.add('hidden');
        profileTab.classList.remove('hidden');
        profileTab.innerHTML = profileName;
    }
})
