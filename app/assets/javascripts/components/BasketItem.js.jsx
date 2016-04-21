var BasketItem = React.createClass({
  render: function(){
    return (
      <tbody>
        {
          this.props.items.map(function(item) {
            return (
              <tr className="basket-item" key={item.id}>
                <td className="basket-item__name">{item.name}</td>
                <td className="basket-item__code">{item.code}</td>
                <td className="basket-item__quantity"><QuantityInput /></td>
                <td className="basket-item__price">{item.price}</td>
              </tr>
            );
          })
        }
      </tbody>
    )
  }
});