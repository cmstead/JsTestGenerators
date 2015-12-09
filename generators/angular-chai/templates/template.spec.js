describe('<%= moduleName %>', function () {
    'use strict';
    
    beforeEach(function () {
<%- dependencies %>
        module('<%= moduleName %>');
    });
    
    describe('<%= functionName %>', function () {
    
        it('should have a passing test', function () {
            expect(true).to.be.true;
        });
    
    });
});