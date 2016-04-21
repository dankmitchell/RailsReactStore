var Basket = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.data,
      subtotal: 0,
      delivery: 0,
      total: 0
    };
  },

  getDefaultProps: function () {
    return {
      items: []
    }
  },

  componentWillMount: function() {
    this.setState({
      items: this.props.items
    })
  },

  componentDidMount: function() {
    this.token = $.subscribe('basket_added', this.addItem);
    this.token = $.subscribe('basket_removed', this.removeItem);
    this.setItemsTotal();
    this.setDeliveryAmount();
    this.setBasketTotal();
  },

  componentWillUnmount: function() {
    $.unsubscribe(this.token)
  },

  addItem: function(e, item) {
    this.state.items.push(item);
    this.setState({
      items: this.props.items
    })

    this.setItemsTotal();
    this.setDeliveryAmount();
    this.setBasketTotal();
  },

  removeItem: function(e, itemId) {
    var itemsArray = this.state.items.slice();
    this.state.items.splice(itemsArray, 1);
    this.setState({
      items: itemsArray
    });

    this.setItemsTotal();
    this.setDeliveryAmount();
    this.setBasketTotal();
  },

  setItemsTotal: function() {
    subtotal = 0;

    this.state.items.forEach(function(item, index) {
      subtotal += item.price;
    });

    this.setState({
      subtotal: subtotal
    })
  },

  setDeliveryAmount: function() {
    delivery = 0;

    if (subtotal > 0.00 && subtotal < 50.00) {
      delivery = 4.95;
    } else if (subtotal >= 50.00 && subtotal <= 90.00) {
      delivery = 2.95;
    } else if (subtotal > 90.00) {
      delivery = 0.00;
    } else {
      delivery = 0;
    }

    this.setState({
      delivery: delivery
    })
  },

  setBasketTotal: function() {
    var total = 0;

    this.setState({
      total: subtotal + delivery
    })
  },

  render: function() {
    var basket_table = (
      <table className="basket-list stack">
        <thead>
          <tr>
            <td>Name</td>
            <td>Code</td>
            <td>Quantity</td>
            <td className="text-right">Price</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map(function(item){
            return <BasketItem data={item} key={item.id} />
          })}
        </tbody>
        <tfoot>
          <tr className="basket__sub-total">
            <td colSpan="3">Sub Total: </td>
            <td>{this.state.subtotal.toLocaleString('en', { style: 'currency', currency: 'GBP' })}</td>
            <td></td>
          </tr>
          <tr className="basket__delivery">
            <td colSpan="3">Delivery: </td>
            <td>{this.state.delivery.toLocaleString('en', { style: 'currency', currency: 'GBP' })}</td>
            <td></td>
          </tr>
          <tr className="basket__total">
            <td colSpan="3">Total: </td>
            <td>{this.state.total.toLocaleString('en', { style: 'currency', currency: 'GBP' })}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    )

    return(
      <div className="basket-wrap">
        {basket_table}
      </div>
    )
  }
});
