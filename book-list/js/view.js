var bookView = Backbone.View.extend({
	tagName: 'li', 
	model: Book, 
	initialize: function() {
		this.listenTo(this.model, "change", this.render);
	}, 
	render: function() {
		this.$el.html('<li>' + this.model.get('BookName') + '</li>'); 
		return this; 
	}
});

var bookListView = Backbone.View.extend({ 
	model: BooksCollection, 
	initialize: function() {
		this.listenTo(this.model, "add", this.modelUpdated); 
	}, 
	render: function() {
		this.$el.html(''); 
		for (var i = 0; i < this.model.length; i++) {
			var m_bookView = new bookView({model: this.model.at(i)}); 
			this.$el.append(m_bookView.$el); 
			m_bookView.render(); 
		}
		return this; 
	}, 
	modelUpdated: function() {
		this.render(); 
	}
});

// use templates for drop down
var bookView2 = Backbone.View.extend({
	model: Book, 
	tagname: 'li',
	events: {
		'click':"itemClicked"

	}, 
	itemClicked: function() {
		alert('clicked: ' + this.model.get('BookName')); 
	}, 

	// need initialize because of template
	initialize: function() {
		this.template = _.template($('#bookItem').html()); 
	}, 

	render: function() {
//		var template = _.template($('#bookItem').html()); 
		this.$el.html(this.template(this.model.attributes)); 
		return this; 
	}

}); 

var bookListView2 = Backbone.View.extend({
	model: BooksCollection, 
	render: function() {
		for (var i = 0; i < this.model.length; i++) {
			var m_bookView = new bookView2({model: this.model.at(i)}); 

			this.$el.append(m_bookView.$el); 
			m_bookView.render(); 
		}
		return this; 


	}
}); 