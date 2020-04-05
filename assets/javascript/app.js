//here we will make our on click function to enter the website.
$("#enter").on("click", function() {
    
    //here we are giving the front page jumbotron an animation
    //when the enter button is clicked.
    $("#front-page").addClass("animated bounceOutUp");
    
    //here we create a new div for the projects to go into.
    //we also give this div an id and some classes.
    $("#second-page").empty();
    var projectsPage = $("<div>");
    projectsPage.attr("id", "project-page");
    projectsPage.addClass("container animated bounceInDown delay-1s");
    $("#second-page").append(projectsPage);

    //here we will create more divs for the content of the page.
    var image1 = $("<img>");
    image1.addClass("img-thumbnail rounded float-left");
    image1.attr("src", "./assets/images/About Me Page.png");
    $("#project-page").append(image1);

    var image2 = $("<img>");
    image2.addClass("img-thumbnail img-fluid rounded float-right");
    image2.attr("src", "./assets/images/Game Bros Project.png");
    $("#project-page").append(image2);


});