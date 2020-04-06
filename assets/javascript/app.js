//here we will make our on click function to enter the website.
$("#enter").on("click", function() {
    
    //here we are giving the front page jumbotron an animation
    //when the enter button is clicked.
    $("#front-page").addClass("animated bounceOutUp");
    
    //here we create a new div for the projects to go into.
    //we also give this div an id and some classes.
    //$("#second-page").empty();

    
    var projectsPage = $("<div>");
    projectsPage.attr("id", "project-page");
    projectsPage.addClass("jumbotron animated bounceInUp delay-1s");
    $("#second-page").append(projectsPage);

    var welcomeHead = $("<h1>");

    welcomeHead.html("My Projects!<hr class='my-4'>");
    $("#project-page").append(welcomeHead);

    //here we will create more divs for the content of the page.
    var image1 = $("<img>");
    image1.addClass("img-thumbnail rounded col-lg-6");
    image1.attr("src", "./assets/images/Game Bros Project.png");
    $("#project-page").append(image1);

    var image2 = $("<img>");
    image2.addClass("img-thumbnail rounded col-lg-6");
    image2.attr("src", "./assets/images/About Me Page.png");
    $("#project-page").append(image2);

    var image3 = $("<img>");
    image3.addClass("img-thumbnail rounded col-lg-6");
    image3.attr("src", "./assets/images/Giphy App.png");
    $("#project-page").append(image3);

    var image4 = $("<img>");
    image4.addClass("img-thumbnail rounded col-lg-6");
    image4.attr("src", "./assets/images/NFL Trivia.png");
    $("#project-page").append(image4);

    var image5 = $("<img>");
    image5.addClass("img-thumbnail rounded col-lg-6");
    image5.attr("src", "./assets/images/Psychic Game.png");
    $("#project-page").append(image5);

    var image6 = $("<img>");
    image6.addClass("img-thumbnail rounded col-lg-6");
    image6.attr("src", "./assets/images/Train Time App.png");
    $("#project-page").append(image6);

});