export default Ember.Component.extend({
  tagName: ‘a’,
  layoutName: 'components/notification-menu-item’,
  classNameBindings: [‘new-class’],

  link_url: function() {

    return ’users/' + Discourse.User.current().username + '/notifications’;
  }.property('link_url')
});
