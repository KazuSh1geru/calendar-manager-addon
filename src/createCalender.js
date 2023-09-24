function handleButtonClick(e) {
	// スクリプトのタイムゾーンで日時を解析
	var timeZone = Session.getScriptTimeZone();

	var startMsSinceEpoch = e.formInput.startDatetime.msSinceEpoch;
	var startFormattedDatetime = getFormattedDatetime(
		startMsSinceEpoch,
		timeZone,
	);

	var endMsSinceEpoch = e.formInput.endDatetime.msSinceEpoch;
	var endFormattedDatetime = getFormattedDatetime(endMsSinceEpoch, timeZone);

	createEvent(startFormattedDatetime, endFormattedDatetime);
}

function getFormattedDatetime(msSinceEpoch, timeZone) {
	var datetime = new Date(msSinceEpoch);
	// YYYY-MM-DDTHH:MM:SS 形式に変換
	var formattedDatetime = Utilities.formatDate(
		datetime,
		timeZone,
		"yyyy-MM-dd'T'HH:mm:ss",
	);
	return formattedDatetime;
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
		(title = 'テストイベント'),
		(startTime = new Date(startDatetime)),
		(endTime = new Date(endDatetime)),
	);
}
