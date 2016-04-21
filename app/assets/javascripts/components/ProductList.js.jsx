var ProductList = React.createClass({
  render: function() {
    var products = this.props.data.map(function(product) {
      return (
        <Product data={product} key={product.id} />
      )
    });

    return (
      <div className="row">
        {products}
      </div>
    );
  }
});
