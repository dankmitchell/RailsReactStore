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
    return (
      <div className="callout product-wrap">
        <h5 className="product__name">
          {this.props.data.name}
          <small className="product__code"> {this.props.data.code}</small>
        </h5>
        <p className="product__price">{"£" + this.props.data.price}</p>
        <button className={this.state.added ? 'button small radius alert' : 'button small radius success'} onClick={this.addToBasket}>
          {this.state.added ? 'Remove' : 'Add to Basket'}
        </button>
      </div>
    );
  }
});
