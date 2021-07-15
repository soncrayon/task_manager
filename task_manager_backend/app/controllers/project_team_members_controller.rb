class ProjectTeamMembersController < ApplicationController
  before_action :set_project_team_member, only: [:show, :update, :destroy]

  # GET /project_team_members
  def index
    @project_team_members = ProjectTeamMember.all

    render json: @project_team_members
  end

  # GET /project_team_members/1
  def show
    render json: @project_team_member
  end

  # POST /project_team_members
  def create
    @project_team_member = ProjectTeamMember.new(project_team_member_params)

    if @project_team_member.save
      render json: @project_team_member, status: :created, location: @project_team_member
    else
      render json: @project_team_member.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /project_team_members/1
  def update
    if @project_team_member.update(project_team_member_params)
      render json: @project_team_member
    else
      render json: @project_team_member.errors, status: :unprocessable_entity
    end
  end

  # DELETE /project_team_members/1
  def destroy
    @project_team_member.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_team_member
      @project_team_member = ProjectTeamMember.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_team_member_params
      params.require(:project_team_member).permit(:project_id, :team_member_id)
    end
end
