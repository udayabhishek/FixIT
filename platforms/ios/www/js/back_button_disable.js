document.addEventListener("deviceready", onDeviceReady, false); 

//alert("back_button called");
function onDeviceReady() {
//alert ('123');
document.addEventListener('backbutton', onBackKeyDown, false);
}

/*function onBackKeyDown()
{
    alert("onBackKeyDown Called");
    var currentPage = $.mobile.activePage.attr("id");
    alert("currentPage :"+currentPage);
    if(currentPage == "form18"){
        $.mobile.changePage("#form16");
        alert("Go To 16th Page");
    }

    if(currentPage == "cardDetails"){
        $.mobile.changePage("#createUser");
        alert("Return to Create User");
    }
    if(currentPage == "mainMenu"){
        $.mobile.changePage("#logIn");
        alert("Return To Log In");
    }
    if(currentPage == "locationPage"){
        $.mobile.changePage("#mainMenu");
        alert("Return To Main Menu");
        $("#pId").empty();
    }
    if(currentPage == "editUserPage")
    {
        $.mobile.changePage("#mainMenu");
        alert("Return To Main Menu");
        $("#trId").empty();
    }
    if(currentPage == "editCardDetailsPage")
    {
        $.mobile.changePage("#editUserPage");
        alert("Return To Edit User");
    }

    alert("back key pressed");
}*/
function onBackKeyDown(e) {

    //alert("back pressed");
  e.preventDefault();
}
