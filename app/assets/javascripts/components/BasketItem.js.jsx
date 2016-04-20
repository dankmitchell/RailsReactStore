var BasketItem = React.createClass({
  updateItem: function(e) {

  },

  removeItem: function(e) {

  },

  // addItem: function(e, item) {
  //   this.state.items.push(item);
  //   this.forceUpdate();

  //   this.setItemsTotal();
  //   this.setDeliveryAmount();
  //   this.setBasketTotal();
  // },

  // removeItem: function(e, itemId) {
  //   var itemIndexInArray;

  //   this.state.items.some(function(item, index) {
  //     if(item.id === itemId) {
  //       itemIndexInArray = index;
  //       return true;
  //     }
  //   });

  //   this.state.items.splice(itemIndexInArray, 1);
  //   this.forceUpdate();

  //   this.setItemsTotal();
  //   this.setDeliveryAmount();
  //   this.setBasketTotal();
  // },

  render: function() {
    var item = this.props.item;
    return (
      <tr key={item.id} className="basket-item">
        <td className="basket-item__name">{item.name}</td>
        <td className="basket-item__code">{item.code}</td>
        <td className="basket-item__quantity"><input type="number" value={item.quantity}  onChange={this.updateItem} placeholder="Quantity"/></td>
        <td className="basket-item__price">{item.price}</td>
        <td className="text-right">
          <button className="button tiny radius alert" onClick={this.removeItem}>
            &times;
          </button>
        </td>
      </tr>
    );
  }
});