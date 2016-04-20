var QuantityInput = React.createClass({
    getInitialState: function() {
      return {
        quantity: 1
      };
    },

    handleIncrement: function(e) {
      this.setState({
        quantity: this.state.quantity + 1
      });
    },

    handleDecrement: function(e) {
      if (this.state.quantity > 1) {
        this.setState({
          quantity: this.state.quantity - 1
        });
      }
    },

    handleChange: function(e) {
      var value = e.target.value.replace(/[^0-9]/, '');
      value = (value == '' ? 1 : value);
      value = parseInt(value);

      this.setState({
        quantity: value
      });
    },

    render: function() {
      return (
        <div>
          <span onClick={this.handleDecrement}>-</span>
          <input type="text" value={this.state.quantity} onChange={this.handleChange} />
          <span onClick={this.handleIncrement}>+</span>
        </div>
      );
    }
});
