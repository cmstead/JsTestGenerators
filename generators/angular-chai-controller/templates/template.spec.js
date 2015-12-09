describe('<%= moduleName %>', function () {
    'use strict';
    
    beforeEach(function () {
<%- dependencies %>
        module('<%= moduleName %>');
    });
    
    describe('<%= functionName %>', function () {
    
        var <%= controllerName %>;
        
        beforeEach(inject(function ($controller) {
            <%= controllerName %> = $controller('<%= controllerName %>', {});
        }));
    
        it('should have a passing test', function () {
            expect(typeof <%= controllerName %>).to.eql('object');
        });
    
    });
});