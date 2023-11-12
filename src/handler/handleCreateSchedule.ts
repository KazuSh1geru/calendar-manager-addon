type HandleCreateScheduleActionEvent = ActionEvent<
  {
    startDatetime: Date;
    endDatetime: Date;
  },
  {}
>;

class CreateScheduleHandler extends BaseActionHandler<HandleCreateScheduleActionEvent> {
  constructor(
	private scheduleRepository: ScheduleRepository,
	private renderer: NewSchedulePageRenderer,
  ) {
      super();
  }

  protected handleEvent(e: HandleCreateScheduleActionEvent): GoogleAppsScript.Card_Service.ActionResponse {
    console.log('HandleCreateScheduleActionEvent', e);
	const schedule = this.toSchedule(e);
    this.scheduleRepository.create(schedule);
	const ActionResponse= this.renderer.renderPage();
    return ActionResponse;
  }

  private toSchedule(e: HandleCreateScheduleActionEvent): Schedule {
    console.log('HandleCreateScheduleActionEvent', e);
    const formInputs = e.commonEventObject.formInputs;
    const startMsSinceEpoch =
      formInputs.startDatetime.dateTimeInput.msSinceEpoch;
    const endMsSinceEpoch = formInputs.endDatetime.dateTimeInput.msSinceEpoch;
    const startDatetime = this.toDate(startMsSinceEpoch);
    const endDatetime = this.toDate(endMsSinceEpoch);
    const schedule = {
      title: 'テストイベント',
      startDatetime: startDatetime,
      endDatetime: endDatetime,
    };
    console.log('schedule', schedule);
    return schedule;
  }
  private toDate(msSinceEpoch: number): Date {
    const date = new Date(msSinceEpoch);
    return date;
  }
}

function handleCreateSchedule(e: HandleCreateScheduleActionEvent) {
  const scheduleRepository = new DefaultScheduleRepository();
  const renderer = new NewSchedulePageRenderer();
  const handler = new CreateScheduleHandler(scheduleRepository, renderer);
  return handler.handle(e);
}
