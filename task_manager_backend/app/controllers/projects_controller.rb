class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy, :get_top_5_assigners, :get_top_5_resources]

  # GET /projects
  def index
    @projects = Project.all

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project
  end

  def get_top_5_assigners
    render json: @project.get_top_5_assigners  
  end

  def get_top_5_resources
    render json: @project.get_top_5_resources 
  end

  # POST /projects
  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:name, :client, :description)
    end
end
