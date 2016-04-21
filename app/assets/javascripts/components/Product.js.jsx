var Product = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      code: "",
      price: 0,
      id: "",
    };
  },

  componentWillMount: function() {
    this.setState({
      name: this.props.data.name,
      price: this.props.data.price,
      code: this.props.data.code,
      id: this.props.data.id
    })
  },

  addToBasket: function() {
    $.ajax({
      type: "POST",
      url: "/items.json",
      data: {
        item: {
          name: this.state.name,
          price: this.state.price,
          code: this.state.code
        }
      },
      success: function(data) {
        $.publish('basket_added', data);
      }.bind(this),
      error: function () {
        console.log("error");
      }
    })
  },

  render: function() {
    var product = this.props.data;
    return (
      <div className="medium-4 columns end">
        <div className="callout product-wrap">
          <img src={product.image_url} className="product__image"/>
          <h5 className="product__name">
            {product.name}
            <small className="product__code"> {product.code}</small>
          </h5>
          <p className="product__price">{product.price.toLocaleString('en', { style: 'currency', currency: 'GBP' })}</p>
          <button className='button radius primary expanded' onClick={this.addToBasket}>
            Add to Basket
          </button>
        </div>
      </div>
    );
  }
});
