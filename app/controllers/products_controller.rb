class ProductsController < ApplicationController
  def index
    @products = Product.all
    @items = Item.all
  end
end
