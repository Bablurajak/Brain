(function(){
var app=angular.module("ContactApp",[]);

app.controller("ContactCtrl",ContactCtrl);
 
function ContactCtrl(ContactDataSvc)
{
	var self=this;
	self.editMode=false;
	ContactDataSvc.getcontacts()
	.then(function(data){
		self.contacts=data;
	});
	

this.selectContact=function(index){
	this.selectedContact=this.contacts[index];
	self.sucessMessage=undefined;
	self.errorMessage=undefined;
}

this.toggleEditMode=function()  {
console.log("toggle");
	this.editMode=! this.editMode;
}

this.saveUser=function(){
	this.toggleEditMode();
	var userData=this.selectedContact;
	ContactDataSvc.saveUser(userData)

	.then(function(){
		
		self.sucessMessage="Data sucessfully updated";
	},
	function(){
		self.errorMessage="Please try again";
	}
);

}

}
})();