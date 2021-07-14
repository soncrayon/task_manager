Rails.application.routes.draw do
  resources :milestones
  resources :projects
  resources :project_milestones
  resources :tasks
  resources :types
  resources :assigners
  resources :resources
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
