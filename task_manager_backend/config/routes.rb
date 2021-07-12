Rails.application.routes.draw do
  resources :tasks
  resources :types
  resources :assigners
  resources :resources
  resources :milestones
  resources :projects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
