import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	roads: Ember.A(['This way', 'Another way', 'Also a way']),
	chosenRoad: null,

	actions: {
		tryRoad(road) {
			// todo: do a random check 33% to choose right road
			this.incrementProperty('session.actionsMade');
			this.set('chosenRoad', road);
		}
	}
});
