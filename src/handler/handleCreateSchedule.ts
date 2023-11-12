// 必要に応じて、以下の型や関数の定義を調整してください。
declare const Session: any;
declare const Utilities: any;
declare const Logger: any;
declare const CalendarApp: any;

type FormInput = {
	startDatetime: { msSinceEpoch: number };
	endDatetime: { msSinceEpoch: number };
}

interface ActionEventObject {
	formInput: FormInput,
}

class CreateScheduleHandler<ActionEventObject> {
	constructor(
		private scheduleRepository: ScheduleRepository,
		private timeZone: string,
	) {
		this.timeZone = Session.getScriptTimeZone();
	}

	handleEvent(e: ActionEventObject): Schedule | undefined {
		const schedule = this.toSchedule(e);
		const createdSchedule = this.scheduleRepository.create(schedule);
		return createdSchedule;
	}

	private toSchedule(e: ActionEventObject): Schedule {
		const startMsSinceEpoch = e.formInput.startDatetime.msSinceEpoch;
		const endMsSinceEpoch = e.formInput.endDatetime.msSinceEpoch;
		const startDatetime = this.toDate(
			startMsSinceEpoch,
		);
		const endDatetime = this.toDate(
			endMsSinceEpoch,
		);
		return {
			title: 'テストイベント',
			startDatetime: startDatetime,
			endDatetime: endDatetime,
		};
	}
	private toDate(msSinceEpoch: number): Date {
		const date = new Date(msSinceEpoch);
		return date;
	}
}

function handleCreateSchedule(e: ActionEventObject) {
	const scheduleRepository = new DefaultScheduleRepository();
	const handler = new CreateScheduleHandler(scheduleRepository, Session.getScriptTimeZone());
	const schedule = handler.handleEvent(e);
	return schedule;
}
