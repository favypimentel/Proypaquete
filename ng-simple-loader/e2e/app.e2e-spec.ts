import { NgSimpleLoaderPage } from './app.po';

describe('ng-simple-loader App', function() {
  let page: NgSimpleLoaderPage;

  beforeEach(() => {
    page = new NgSimpleLoaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
