module.exports = function(app, path){
    
    app.get("/", function(request, response) {
	  response.sentFile(path.join(__directoryName, "../public/home.html"));
	});	

	app.get("/survey", function(request, response) {
	  response.sentFile(path.join(__directoryName, "../public/survey.html"));
	});
}
