'use strict';

// target element
const startBtn = document.getElementsByClassName('start-btn')[0];
const bannerContentBox = document.getElementsByClassName('banner-content')[0];
const loginContentBox = document.getElementsByClassName('login-content')[0];
const bannerSectionContentBox = document.getElementsByClassName('banner-section')[0]
const errorMsg = document.getElementsByClassName('error')[0];
const inputNameBox = document.getElementsByClassName('input-name')[0];
startBtn.disabled = true;

loginBtn.addEventListener('click', function(e){
    bannerContentBox.classList.add('hidden');
    loginContentBox.classList.remove('hidden');
    loginBtn.disabled = true;
    startBtn.disabled = false;
    startBtn.innerHTML = 'Get Start'
});

startBtn.addEventListener('click', function(e){
    if (inputNameBox.value !== ""){
        bannerSectionContentBox.classList.add('hidden');
        loginBtn.classList.add('hidden');
        profileTab.classList.remove('hidden');
        localStorage.setItem('profileName', inputNameBox.value)
        profileName = inputNameBox.value;
    } else {
        errorMsg.classList.remove('hidden');
    }
});

inputNameBox.addEventListener('keydown', function(e){
    errorMsg.classList.add('hidden');
})