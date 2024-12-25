'use strict';

document.addEventListener('DOMContentLoaded', function(){
    if(localStorage.getItem('profileName')){
        hide(bannerSection);
        hide(loginSection);
        hide(navLoginBtn);
        profile.innerHTML = localStorage.getItem('profileName');
        show(profile);
        show(dashboardSection);
    }
})

navLoginBtn.addEventListener('click', function(){
    hide(bannerSection);
    show(loginSection);
    hide(navLoginBtn);
});


bannerStartSolvingBtn.addEventListener('click', function(){
    hide(bannerSection);
    show(loginSection);
    hide(navLoginBtn)
});


loginLoginBtn.addEventListener('click', function(){
    if (!inputProfileName.value){
        show(errorMsg);
        return;
    }
    localStorage.setItem('profileName', inputProfileName.value);
    profile.innerHTML = localStorage.getItem('profileName');
    show(profile);
    hide(loginSection);
    show(dashboardSection);
});


inputProfileName.addEventListener('keydown', function(){
    hide(errorMsg);
})


