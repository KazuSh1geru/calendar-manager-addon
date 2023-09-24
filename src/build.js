function buildCard() {
    let cardSection1TextParagraph1 = CardService.newTextParagraph()
        .setText('デモアプリです!');

    let cardSection1DatePicker1 = CardService.newDatePicker()
        .setFieldName('date')
        .setTitle('日付を指定できるよ！');

    let cardSection1TimePicker1 = CardService.newTimePicker()
        .setFieldName('Time')
        .setTitle('時間を指定できるよ！');

    let cardSection1 = CardService.newCardSection()
        .addWidget(cardSection1TextParagraph1)
        .addWidget(cardSection1DatePicker1)
        .addWidget(cardSection1TimePicker1);

    let card = CardService.newCardBuilder()
        .addSection(cardSection1)
        .build();
    return card;
}

function onDefaultHomePageOpen() {
    return buildCard()
}