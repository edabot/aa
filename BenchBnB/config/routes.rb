Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :show, :create]
  end

end
