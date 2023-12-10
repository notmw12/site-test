/* ====================== NavBar burger menu code ====================== */
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')


function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ====================== Header code ====================== */

function scrollHeader(){
    const header = document.getElementById('header')

    if(this.scrollY >= 200){
        header.classList.add('scroll-header');
    } else{
        header.classList.remove('scroll-header')
    } 
}
window.addEventListener('scroll', scrollHeader)

/* ====================== Scroll Top Button Code ====================== */

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll');
    } else{
        scrollTop.classList.remove('show-scroll')
    } 
}
window.addEventListener('scroll', scrollTop)

/* ====================== Mixitup Code ====================== */

const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* ====================== Portfolio Code ====================== */

const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/* ====================== Contact Form Code ====================== */

document.addEventListener("DOMContentLoaded", function() {
    emailjs.init('G83VIqNEK6PkEsA66');

    function SendMail() {
        var params = {
            sender_name: document.getElementById("name").value,
            email_id: document.getElementById("email").value,
            phone: document.getElementById("number").value,
            project_subject: document.getElementById("subject").value,
            message: document.getElementById("content").value
        };

        emailjs.send("service_cu5a6a4", "template_9p1ycdq", params).then(function (res) {
            alert("Successfully Sended!" + res.status);
        });
    }

    var sendButton = document.getElementById("sendButton");
    if (sendButton) {
        sendButton.addEventListener("click", SendMail);
    }
});

/* ====================== Scroll Top Button Code ====================== */