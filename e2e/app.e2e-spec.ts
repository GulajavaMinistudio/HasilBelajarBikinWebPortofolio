import { PortofolioAB26Page } from './app.po';

describe('portofolio-ab26 App', function() {
  let page: PortofolioAB26Page;

  beforeEach(() => {
    page = new PortofolioAB26Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
