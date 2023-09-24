function buildCard() {
	let cardSection1DatePTimePicker1 = CardService.newDateTimePicker()
		.setFieldName('startDatetime')
		.setTitle('開始日を指定していください！');

	let cardSection1DatePTimePicker2 = CardService.newDateTimePicker()
		.setFieldName('endDatetime')
		.setTitle('終了日を記入してください！');

	let cardSection1ButtonList1Button1Action1 = CardService.newAction()
		.setFunctionName('handleButtonClick')
		.setParameters({});

	let cardSection1ButtonList1Button1 = CardService.newTextButton()
		.setText('予定の作成')
		.setTextButtonStyle(CardService.TextButtonStyle.TEXT)
		.setOnClickAction(cardSection1ButtonList1Button1Action1);

	let cardSection1ButtonList1 = CardService.newButtonSet().addButton(
		cardSection1ButtonList1Button1,
	);

	let cardSection1 = CardService.newCardSection()
		.addWidget(cardSection1DatePTimePicker1)
		.addWidget(cardSection1DatePTimePicker2)
		.addWidget(cardSection1ButtonList1);

	let card = CardService.newCardBuilder().addSection(cardSection1).build();
	return card;
}
