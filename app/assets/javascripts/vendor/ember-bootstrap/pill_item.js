var get = Ember.get, getPath = Ember.getPath, set = Ember.set;

Bootstrap.PillItem = Ember.View.extend({
  classNameBindings: 'isActive:active',
  template: Ember.Handlebars.compile('<a href="#">{{content}}</a>'),

  isActive: Ember.computed(function() {
    var selection = getPath(this, 'parentView.selection'),
        content = get(this, 'content');
    return selection === content;
  }).property('parentView.selection', 'content').cacheable(),

  click: function(event) {
    var content = get(this, 'content'),
        parentView = get(this, 'parentView');
    set(parentView, 'selection', content);
    return false;
  }
});
