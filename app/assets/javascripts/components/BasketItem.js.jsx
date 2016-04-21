var BasketItem = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      code: "",
      price: 0,
      id: "",
      quantity: 1
    }
  },

  componentWillMount: function() {
    this.setState({
      name: this.props.data.name,
      price: this.props.data.price,
      code: this.props.data.code,
      id: this.props.data.id
    })
  },

  removefromBasket: function() {
    $.ajax({
      type: "DELETE",
      url: '/items/' + this.state.id + '.json',
      data: {
        item: {
          name: this.state.name,
          price: this.state.price,
          code: this.state.code
        }
      },
      success: function(data) {
        $.publish('basket_removed', data);
      }.bind(this),
      error: function () {
        console.log("error");
      }
    })
  },

  render: function(){
    var item = this.props.data;
    var itemQuantity = 1;
    var itemPrice = item.price * itemQuantity;
    return (
      <tr className="basket-item">
        <td className="basket-item__name">{item.name}</td>
        <td className="basket-item__code">{item.code}</td>
        <td className="basket-item__quantity">{itemQuantity}</td>
        <td className="basket-item__price">{itemPrice.toLocaleString('en', { style: 'currency', currency: 'GBP' })}</td>
        <td className="text-right">
          <button className="button tiny radius alert" onClick={this.removefromBasket}>&times;</button>
        </td>
      </tr>
    );
  }
});