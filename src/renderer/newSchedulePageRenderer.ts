class NewSchedulePageRenderer extends BasePageRenderer<never> {
  protected renderSections(): GoogleAppsScript.Card_Service.CardSection[] {
    const startDateTimePickerSection = this.dateTimePickerSection('startDatetime', '開始日を指定してください！');
    console.log('startDateTimePickerSection', startDateTimePickerSection);
    const endDatetimePickerSection = this.dateTimePickerSection('endDatetime', '終了日を記入してください！');
    const actionButtonSection = this.actionButtonSection();
    return [
      startDateTimePickerSection,
      endDatetimePickerSection,
      actionButtonSection,
    ];
  }

  private dateTimePickerSection(fieldName: string, title: string): GoogleAppsScript.Card_Service.CardSection {
    const section = CardService.newCardSection();
    const dateTimePicker = CardService.newDateTimePicker()
      .setFieldName(fieldName)
      .setTitle(title);
    section.addWidget(dateTimePicker);
    return section;
  }
  private actionButtonSection(): GoogleAppsScript.Card_Service.CardSection {
    const section = CardService.newCardSection();
    const createScheduleAction = CardService.newAction()
      .setFunctionName('handleCreateSchedule')
    const createScheduleButton = CardService.newTextButton()
      .setText('予定の作成')
      .setTextButtonStyle(CardService.TextButtonStyle.TEXT)
      .setOnClickAction(createScheduleAction);
    const buttonSet = CardService.newButtonSet().addButton(
      createScheduleButton,
    );
    section.addWidget(buttonSet);
    return section;
  }
}