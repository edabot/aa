Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :show, :create]
    resources :users, only: [:create]
    resources :session, only: [:create]
    delete 'session', to: "session#destroy"
  end

end
