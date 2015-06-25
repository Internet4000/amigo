import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.Object.create({
			name: 'Amigo',
			totalDays: 7
		});
	},
	actions: {
		reset() {
			this.transitionTo('play');
		}
	}
});
