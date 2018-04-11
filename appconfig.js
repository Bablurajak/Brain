
(function(){
var app=angular.module("ContactApp");
 app.service("AppDataService",function(Appservice)
{
 	 	this.name="Appservice";
 	this.author="Bablu";
 	this.builtdate= new Date().toDateString();

 });
})();