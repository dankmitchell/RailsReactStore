var Product = React.createClass({
  getInitialState: function() {
    return {
      added: false
    };
  },

  addToBasket: function() {
    if(!this.state.added) {
      $.publish('basket.added', this.props.data);
    }
    else {
      $.publish('basket.removed', this.props.data.id);
    }

    this.setState({
      added: !this.state.added
    });
  },

  render: function() {
    var product = this.props.data;
    return (
      <div className="callout product-wrap">
        <h5 className="product__name">
          {product.name}
          <small className="product__code"> {product.code}</small>
        </h5>
        <p className="product__price">{"£" + product.price}</p>
        <button className={this.state.added ? 'button small radius alert' : 'button small radius success'} onClick={this.addToBasket}>
          {this.state.added ? 'Remove' : 'Add to Basket'}
        </button>
      </div>
    );
  }
});
