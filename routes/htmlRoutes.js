module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index")
    });

    app.get("/projects", function(req, res) {
        res.render("projects")
    })

    app.get("/contact", function(req, res) {
        res.render("contact");
    })
};