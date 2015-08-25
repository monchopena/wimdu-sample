/* global describe, it */

describe('Simple test ', function() {

beforeEach(module('app'));

var MainCtrl,
scope;

beforeEach(inject(function ($rootScope, $controller) {
	scope = $rootScope.$new();
	MainCtrl = $controller('MainCtrl', {
		$scope: scope
	});
}));

it('Yes It works!', function () {
	expect(scope.showme).toEqual(false);
});

});
