import { FirstAngPage } from './app.po';

describe('first-ang App', () => {
  let page: FirstAngPage;

  beforeEach(() => {
    page = new FirstAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
