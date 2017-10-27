import { WebProjectFrontPage } from './app.po';

describe('web-project-front App', () => {
  let page: WebProjectFrontPage;

  beforeEach(() => {
    page = new WebProjectFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
