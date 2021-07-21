Rails.application.routes.draw do
  resources :user_replies
  resources :user_notes
  resources :replies
  resources :notes
  resources :team_members
  resources :resources
  resources :assigners
  resources :users
  resources :milestones
  resources :projects
  resources :project_milestones
  resources :tasks
  resources :types
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
