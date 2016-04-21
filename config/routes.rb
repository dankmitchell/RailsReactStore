Rails.application.routes.draw do
  root 'products#index'
  resources :items, only: [:create, :destroy]
end
