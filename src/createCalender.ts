// function handleButtonClick(e: ActionEventObject): void {
// 	// スクリプトのタイムゾーンで日時を解析
// 	const timeZone = Session.getScriptTimeZone();

// 	const startMsSinceEpoch = e.formInput.startDatetime.msSinceEpoch;
// 	const startFormattedDatetime = getFormattedDatetime(
// 		startMsSinceEpoch,
// 		timeZone,
// 	);

// 	const endMsSinceEpoch = e.formInput.endDatetime.msSinceEpoch;
// 	const endFormattedDatetime = getFormattedDatetime(endMsSinceEpoch, timeZone);

// 	createEvent(startFormattedDatetime, endFormattedDatetime);
// }

// function getFormattedDatetime(msSinceEpoch: number, timeZone: string): string {
// 	const datetime = new Date(msSinceEpoch);
// 	// YYYY-MM-DDTHH:MM:SS 形式に変換
// 	const formattedDatetime = Utilities.formatDate(
// 		datetime,
// 		timeZone,
// 		"yyyy-MM-dd'T'HH:mm:ss",
// 	);
// 	return formattedDatetime;
// }

// function createEvent(startDatetime: string, endDatetime: string): void {
// 	if (!startDatetime || !endDatetime) {
// 		// 日付が設定されていない場合、エラーを回避
// 		Logger.log('日付が設定されていません。');
// 		return;
// 	}
// 	Logger.log('startDatetime: ' + startDatetime);
// 	Logger.log('endDatetime: ' + endDatetime);
// 	const event = CalendarApp.getDefaultCalendar().createEvent(
// 		'テストイベント',
// 		new Date(startDatetime),
// 		new Date(endDatetime),
// 	);
// }
