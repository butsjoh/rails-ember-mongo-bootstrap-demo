var get = Ember.get;

Bootstrap.Button = Ember.Button.extend({
  classNames: ['btn'],
  classNameBindings: ['typeClass', 'disabled'],

  typeClass: Ember.computed(function() {
    return 'btn-' + get(this, 'type');
  }).property('type').cacheable()
});
