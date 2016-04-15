describe("App", function() {

  beforeEach(function() {
    setFixtures('<p id="bob">Test</p>');
  });

  it("it works", function() {
    expect($('#bob')).toHaveText('Test');
    expect(true).toBe(true);
  });

});
