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
