function handleButtonClick(e) {
     // スクリプトのタイムゾーンで日時を解析
     var timeZone = Session.getScriptTimeZone();

	var startMsSinceEpoch = e.formInput.startDatetime.msSinceEpoch;
    Logger.log('startMsSinceEpoch: ' + startMsSinceEpoch);
	var startDatetime = new Date(startMsSinceEpoch);
    Logger.log('startDatetime: ' + startDatetime);
	// YYYY-MM-DDTHH:MM:SS 形式に変換
    var startFormattedDate = Utilities.formatDate(startDatetime, timeZone, "yyyy-MM-dd'T'HH:mm:ss");
    Logger.log('startFormattedDate: ' + startFormattedDate);

	var endMsSinceEpoch = e.formInput.endDatetime.msSinceEpoch;
	var endDatetime = new Date(endMsSinceEpoch);
	// YYYY-MM-DD 形式に変換
	var endFormattedDate = Utilities.formatDate(endDatetime, timeZone, "yyyy-MM-dd'T'HH:mm:ss");

	Logger.log('startDatetime: ' + startFormattedDate);
	createEvent(startFormattedDate, endFormattedDate);
}

// Creates an all-day event for the moon landing and logs the ID.
function createEvent(startDatetime, endDatetime) {
	if (!startDatetime | !endDatetime) {
		// 日付が設定されていない場合、エラーを回避
		Logger.log('日付が設定されていません。');
		return;
	}
	Logger.log('startDatetime: ' + startDatetime);
	Logger.log('endDatetime: ' + endDatetime);
	var event = CalendarApp.getDefaultCalendar().createEvent(
		title='テストイベント',
		startTime=new Date(startDatetime),
        endTime=new Date(endDatetime),
	);
	Logger.log('Event ID: ' + event.getId());
	Logger.log('Event End Time: ' + event.getEndTime());
}
