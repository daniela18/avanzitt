
this.Avanzit = (function(Backbone,Marionette){
	App = new Marionette.Application;
	App.addRegions ({
		mainRegion: "#main-region"
	})
	App.addInitializer(function(){
		return App.module("MainRegion").start();
	})
	App.on ("initialize:after",function(){
		if (Backbone.history) {
			Backbone.history.start();
		};
	})
	return App 
})(Backbone,Marionette);
