import Ember from 'ember';

export default Ember.Component.extend({
	totalDays: 7,
	day: 0,

	daysLeft: Ember.computed('day', function() {
		return this.get('totalDays') - this.get('day');
	}),

	percentageComplete: Ember.computed('day', function() {
		const day = this.get('day');
		const totalDays = this.get('totalDays');

		return (100 / totalDays) * day;
	}),

	bgColor: Ember.computed('percentageComplete', function() {
		const percentage = this.get('percentageComplete') / 100;
		return `background-color: rgba(0,0,0,${percentage})`;
	}),

	onNewDay: Ember.observer('day', function() {
		const day = this.get('day');
		Ember.debug('Day ' + day);
	}),

	isFirstDay: Ember.computed('day', function() {
		return this.get('day') === 0;
	}),

	isLastDay: Ember.computed('day', function() {
		return this.get('day') === (this.get('totalDays') - 1);
	}),

	actions: {
		newGame() {
			this.set('day', 0);
		},
		endTurn() {
			this.incrementProperty('day', 1);
		}
	}
});
