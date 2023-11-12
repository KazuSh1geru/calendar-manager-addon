interface Schedule {
  title: string;
  startDatetime: Date;
  endDatetime: Date;
}

interface ScheduleRepository {
  create(schedule: Schedule): Schedule | undefined;
  update(schedule: Schedule): Schedule;
}

class DefaultScheduleRepository implements ScheduleRepository {
  create(schedule: Schedule): Schedule | undefined {
    const startDatetime = schedule.startDatetime;
    const endDatetime = schedule.endDatetime;
    if (!startDatetime || !endDatetime) {
      // 日付が設定されていない場合、エラーを回避
      console.log('日付が設定されていません。');
      return;
    }
    const event = CalendarApp.getDefaultCalendar().createEvent(
      'テストイベント',
      startDatetime,
      endDatetime,
    );
    return schedule;
  }

  update(schedule: Schedule): Schedule {
    return schedule;
  }
}
