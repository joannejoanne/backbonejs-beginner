var Book = Backbone.Model.extend({
	// default values 
	defaults: {
		ID: "",
		BookName: "" 
	}, 
	idAttribute: "ID"
});

var BooksCollection = Backbone.Collection.extend({
	model: Book 
}); 