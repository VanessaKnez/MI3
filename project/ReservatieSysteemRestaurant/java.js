"use strict";

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