var React = require('react');

var ReactExample = React.createClass({
  render: function() {
    return (
      <div style={{border:'1px solid black', margin:'20px', padding: '20px'}}>
        <h2>This seat belongs to REACT</h2>
      </div>
    )
  }
});

React.render(
  <ReactExample />,
  document.getElementById('react-example')
);
