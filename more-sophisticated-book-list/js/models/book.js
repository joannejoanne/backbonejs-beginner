var app = app || {}; 

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.png', 
		title: 'untitled',
		author: 'unknown',
		releaseDate: 'unknown', 
		keywords: 'None' 
	}
}); 

