"use strict";
var modal = document.getElementById('myModal');

$(document).ready(function () {
    $("#btnSignIn").click(function () {
            window.location = "account/registreer.html";
        })
    $("#btnLinkWwVergeten").click(function () {
            window.location = "account/wachtwoordVergeten.html";
        })
    $("#btnLogIn").click(function () {
            tijdelijkeGegevens();
        })
    $("#btnConfirmMailAdresWwVergeten").click(function () {
            SendEmail();    
            window.location = "../index.html";
        })
    $("#btnReserveer").click(function () {
            window.location = "reserveer.html";
        })
    $("#btnBestel").click(function () {
            window.location = "bestel.html";
        })
});

// voorlopig gaan we drie gebruikers hebben
function tijdelijkeGegevens() {
    var naam = loginNaam;
    var ww = loginWachtwoord;
    if (naam == "Test" && ww == "Test123") {
        window.location = "keuze.html";
    }
    if (naam == "Werknemer" && ww == "Werknemer123") {
        window.location = "keuzeWerknemer.html";
    }
    if (naam == "Admin" && ww == "Admin123") {
        window.location = "keuzeAdmin.html";
    }
    else {
        alert("test");
    }
}

// gebaseerd op deze link: https://stackoverflow.com/questions/15089857/sending-html-emails-with-javascript
function SendEmail()
{
    var outlookApp = new ActiveXObject("Outlook.Application");
    var nameSpace = outlookApp.getNameSpace("MAPI");
    mailFolder = nameSpace.getDefaultFolder(6);
    mailItem = mailFolder.Items.add('IPM.Note.FormA');
    mailItem.Subject = "Me";
    mailItem.To = "myspambox1999@hotmail.com";
    mailItem.HTMLBody = "test";
    mailItem.display(0);
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('fotoBacon');
var img2 = document.getElementById('fotoHamburger');
var img3 = document.getElementById('fotoLanding');
var img4 = document.getElementById('fotoPaella');
var img5 = document.getElementById('fotoPesto');
var img6 = document.getElementById('fotoShutter');
var img7 = document.getElementById('fotoSpaghetti');
var img8 = document.getElementById('fotoTortilla');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img5.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img6.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img7.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img8.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// modal sluiten als we buiten de foto klikken
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}