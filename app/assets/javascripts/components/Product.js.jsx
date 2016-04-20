var Product = React.createClass({
  getInitialState: function() {
    return {
      added: false
    };
  },

  addToBasket: function(e) {
    $.publish('basket.added', this.props.data);

    this.setState({
      added: this.state.added
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
        <button className='button small radius success' onClick={this.addToBasket}>
          Add to basket
        </button>
      </div>
    );
  }
});
