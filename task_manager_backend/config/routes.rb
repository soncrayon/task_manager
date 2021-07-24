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

  get '/task_status_percentages', to: 'tasks#task_status_percentages'
  get '/active_tasks_per_milestone', to: 'milestones#active_tasks_per_milestone'
  get '/assigners/get_top_5', to: 'assigners#get_top_5_all'
  get '/resources/get_top_5', to: 'resources#get_top_5_all'
  get '/project/get_top_5_assg/:id', to: 'projects#get_top_5_assigners'
  get '/project/get_top_5_resc/:id', to: 'projects#get_top_5_resources'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
