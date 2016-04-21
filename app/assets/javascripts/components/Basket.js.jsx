var Basket = React.createClass({
  getInitialState: function() {
    $.subscribe('basket.added', this.addItem);
    $.subscribe('basket.removed', this.removeItem);

    return {
      items: [],
      subtotal: 0,
      delivery: 0,
      total: 0
    };
  },

  addItem: function(e, item) {
    this.state.items.push(item);
    this.forceUpdate();

    this.setItemsTotal();
    this.setDeliveryAmount();
    this.setBasketTotal();
  },

  removeItem: function(e, itemId) {
    var itemIndexInArray;

    this.state.items.some(function(item, index) {
      if(item.id === itemId) {
        itemIndexInArray = index;
        return true;
      }
    });

    this.state.items.splice(itemIndexInArray, 1);
    this.forceUpdate();

    this.setItemsTotal();
    this.setDeliveryAmount();
    this.setBasketTotal();
  },

  updateItem: function(e) {
    this.setState({ item: e.target.value });
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
    return (
      <div className="basket-wrap">
        <table className="basket-list stack">
          <thead>
            <tr>
              <td>Name</td>
              <td>Code</td>
              <td>Quantity</td>
              <td className="text-right">Price</td>
            </tr>
          </thead>
          <BasketItem items={this.state.items} />
          <tfoot>
            <tr className="basket__sub-total">
              <td colSpan="3">Sub Total: </td>
              <td>{this.state.subtotal.toLocaleString('en', { style: 'currency', currency: 'GBP' })}</td>
            </tr>
            <tr className="basket__delivery">
              <td colSpan="3">Delivery: </td>
              <td>{this.state.delivery.toLocaleString('en', { style: 'currency', currency: 'GBP' })}</td>
            </tr>
            <tr className="basket__total">
              <td colSpan="3">Total: </td>
              <td>{this.state.total.toLocaleString('en', { style: 'currency', currency: 'GBP' })}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
});
