SearchView = Backbone.View.extend({
	el: '#search_container', 

	initialize: function() {
			var searchTemplate =  _.template($('#search_template').html());
			this.$el.html(searchTemplate); 

	}, 
	events: {
		"click input[type=button]" : "doSearch"
	},

	doSearch: function(event) {
		alert("Search for " + $("#search_input").val()); 
	}


}); 