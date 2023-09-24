function buildCard() {
	let cardSection1DatePicker1 = CardService.newDatePicker()
		.setFieldName('date')
		.setTitle('Pick a date');

	let cardSection1ButtonList1Button1Action1 = CardService.newAction()
		.setFunctionName('handleButtonClick')
		.setParameters({});

	let cardSection1ButtonList1Button1 = CardService.newTextButton()
		.setText('テストイベントを作成')
		.setTextButtonStyle(CardService.TextButtonStyle.TEXT)
		.setOnClickAction(cardSection1ButtonList1Button1Action1);

	let cardSection1ButtonList1 = CardService.newButtonSet().addButton(
		cardSection1ButtonList1Button1,
	);

	let cardSection1 = CardService.newCardSection()
		.addWidget(cardSection1DatePicker1)
		.addWidget(cardSection1ButtonList1);

	let card = CardService.newCardBuilder().addSection(cardSection1).build();
	return card;
}

function onDefaultHomePageOpen() {
	return buildCard();
}
// function buildSimpleCard(e) {
// 	var buttonAction = CardService.newAction().setFunctionName(
// 		'onAddAttendeesButtonClicked',
// 	);
// 	var button = CardService.newTextButton()
// 		.setText('Add new attendee')
// 		.setOnClickAction(buttonAction);

// 	// Check the event object to determine if the user can add
// 	// attendees and disable the button if not.
// 	if (!e.calendar.capabilities.canAddAttendees) {
// 		button.setDisabled(true);
// 	}

// 	// ...continue creating card sections and widgets, then create a Card
// 	// object to add them to. Return the built Card object.
// }

// /**
//  * Callback function for a button action. Adds attendees to the
//  * Calendar event being edited.
//  *
//  * @param {Object} e The action event object.
//  * @return {CalendarEventActionResponse}
//  */
// function onAddAttendeesButtonClicked(e) {
// 	return CardService.newCalendarEventActionResponseBuilder()
// 		.addAttendees(['kazushi.takakusagi@gmail.com'])
// 		.build();
// }
