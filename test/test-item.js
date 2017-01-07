var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var GifItem = require('./components/GifItem');

describe('GifItem component', function() {
    it('Renders the gif',  function() {
        var url = "http://media3.giphy.com/media/Z1kpfgtHmpWHS/giphy.gif";
        

        var renderer = TestUtils.createRenderer();
        renderer.render(<GifItem src={url} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gif-item');
});
});