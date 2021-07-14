class ProjectMilestonesController < ApplicationController
  before_action :set_project_milestone, only: [:show, :update, :destroy]

  # GET /project_milestones
  def index
    @project_milestones = ProjectMilestone.all

    render json: @project_milestones
  end

  # GET /project_milestones/1
  def show
    render json: @project_milestone
  end

  # POST /project_milestones
  def create
    @project_milestone = ProjectMilestone.new(project_milestone_params)

    if @project_milestone.save
      render json: @project_milestone, status: :created, location: @project_milestone
    else
      render json: @project_milestone.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /project_milestones/1
  def update
    if @project_milestone.update(project_milestone_params)
      render json: @project_milestone
    else
      render json: @project_milestone.errors, status: :unprocessable_entity
    end
  end

  # DELETE /project_milestones/1
  def destroy
    @project_milestone.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_milestone
      @project_milestone = ProjectMilestone.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_milestone_params
      params.require(:project_milestone).permit(:project_id, :milestone_belongs_to)
    end
end
