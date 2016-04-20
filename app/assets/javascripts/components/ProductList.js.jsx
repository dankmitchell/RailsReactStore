var ProductList = React.createClass({
  render: function() {
    var products = this.props.data.map(function(product) {
      return (
        <div className="medium-4 columns end" key={product.id}>
          <Product data={product} />
        </div>
      )
    });

    return (
      <div className="row">
        {products}
      </div>
    );
  }
});
