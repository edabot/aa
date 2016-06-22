Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api do
    resources :todos, only: [:index, :show, :create, :destroy, :update] do
      resources :steps, only: [:index, :create]
    end
    resources :steps, only: [:destroy, :update]
  end

end
