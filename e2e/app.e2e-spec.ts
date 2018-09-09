import { JeugdhuisAppUiPage } from './app.po';

describe('jeugdhuis-app-ui App', () => {
  let page: JeugdhuisAppUiPage;

  beforeEach(() => {
    page = new JeugdhuisAppUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
