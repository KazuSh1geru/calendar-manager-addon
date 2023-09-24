function handleButtonClick(e) {
	var msSinceEpoch = e.formInput.date.msSinceEpoch;
	var dateSelected = new Date(msSinceEpoch);
	// YYYY-MM-DD 形式に変換
	var formattedDate = dateSelected.toISOString().split('T')[0];

	Logger.log('dateSelected: ' + formattedDate);
	createEvent(formattedDate);
}

// Creates an all-day event for the moon landing and logs the ID.
function createEvent(dateSelected) {
	if (!dateSelected) {
		// 日付が設定されていない場合、エラーを回避
		Logger.log('日付が設定されていません。');
		return;
	}
	Logger.log('dateSelected: ' + dateSelected);
	var event = CalendarApp.getDefaultCalendar().createAllDayEvent(
		'テストイベント',
		new Date(dateSelected),
	);
	Logger.log('Event ID: ' + event.getId());
	Logger.log('Event End Time: ' + event.getEndTime());
}
