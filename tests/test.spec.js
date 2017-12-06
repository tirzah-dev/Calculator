describe('Calculator', function() {
  beforeEach(function() {
    var screen = document.createElement('div');
    window.screen = screen;
  });
  describe('addToScreen', function() {
    it('should display input in screen', function() {
      spyOn(window, 'addToScreen');
      addToScreen('3');
      expect(addToScreen).toHaveBeenCalledWith('3');
    });
  });
  describe('processNumber', function() {
    it('should display input in screen', function() {
      spyOn(window, 'addToScreen').and.returnValue(null);
      processNumber(4);
      expect(addToScreen).toHaveBeenCalledWith(4);
    });
  });
  describe('processOperator', function(){
    it('should add operator after number', function() {
      spyOn(window, 'addToScreen').and.returnValue(null);
      processOperator('+');
      expect(addToScreen).toHaveBeenCalledWith('+');
    });
    it('should replace last character if operator', function() {
      processNumber(0);
      processOperator('+');
      processOperator('-');
      expect(window.screen.innerText).toBe('0-');
    });
  });
  describe('lastIndexIsOperator()', function(){
    it('should check if the last character of the screen.innerText is an operator', function(){
      window.screen.innerText = '4+';
      expect(lastIndexIsOperator()).toBe(true);
      window.screen.innerText = '4-';
      expect(lastIndexIsOperator()).toBe(true);
      window.screen.innerText = '4/';
      expect(lastIndexIsOperator()).toBe(true);
      window.screen.innerText = '4*';
      expect(lastIndexIsOperator()).toBe(true);
      
      window.screen.innerText = '40';
      expect(lastIndexIsOperator()).toBe(false);
    });
  });
  describe('setToZero()', function() {
    it('should set the screen to zero', function() {
      window.screen.innerText = '1';
      setToZero();
      expect(window.screen.innerText).toBe('0');
    });
  });
  describe('setScreen()', function() {
    it('should replace contents of screen with input', function() {
      window.screen.innerText = '7+7';
      setScreen('78');
      expect(window.screen.innerText).toBe('78');
    });
  });
  describe('calculate()', function() {
    it('should evaluate the problem in the screen and return the answer in the screen', function() {
      window.screen.innerText = '8+4';
      calculate();
      expect(calculate('8+4')).toBe('12');
      // expect(calculate('8-4')).toBe('4');
      // expect(calculate('8/4')).toBe('2');
      // expect(calculate('8*4')).toBe('32');
    });
  });
  // describe('isNegativeNum()', function() {
       //it('should identify if number is negative', function() {
  // });
  // describe('processKey()', function() {
       //it('should identify which function should be used based on which keyboard key was pressed', function() {
  // });
});