class ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    head :no_content
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :code)
  end
end