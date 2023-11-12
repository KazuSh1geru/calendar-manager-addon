function onDefaultHomePageOpen() {
  const renderer = new NewSchedulePageRenderer();
  const card = renderer.renderPage();
  return card.build();
}
