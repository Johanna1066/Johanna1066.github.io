const phoneIcon = document.getElementById('phone-image');
const emailIcon = document.getElementById('email-image');

phoneIcon.addEventListener('click', showOrHide);
emailIcon.addEventListener('click', showOrHide);

function showOrHide() {
    if (this.nextElementSibling.style.display === 'none') {
        this.nextElementSibling.style.display = 'block';
    } else {    
        this.nextElementSibling.style.display = 'none';
    }

}