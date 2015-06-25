import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('play', function() {
    this.route('map', function() {
      this.route('direction', { path: ':direction' });
    });
    this.route('debug');
  });
});

export default Router;
