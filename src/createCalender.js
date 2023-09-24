// Creates an all-day event for the moon landing and logs the ID.
function createEvent() {
	var event = CalendarApp.getDefaultCalendar().createAllDayEvent(
		'テストイベント',
		new Date('September 24, 2023'),
	);
	Logger.log('Event ID: ' + event.getId());
}
