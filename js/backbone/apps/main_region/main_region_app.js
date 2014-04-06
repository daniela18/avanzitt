
this.Avanzit.module ("MainRegion",function(MainRegion,App,Backbone,Marionette,$,_){
	API = {
		showMainRegion: function(){
			return MainRegion.Show.Controller.showMainRegion();
			}
		};

	MainRegion.on("start",function(){
		debugger
		return API.showMainRegion()
	})
})