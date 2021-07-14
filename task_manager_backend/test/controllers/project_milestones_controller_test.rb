require 'test_helper'

class ProjectMilestonesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_milestone = project_milestones(:one)
  end

  test "should get index" do
    get project_milestones_url, as: :json
    assert_response :success
  end

  test "should create project_milestone" do
    assert_difference('ProjectMilestone.count') do
      post project_milestones_url, params: { project_milestone: { milestone_belongs_to: @project_milestone.milestone_belongs_to, project_id: @project_milestone.project_id } }, as: :json
    end

    assert_response 201
  end

  test "should show project_milestone" do
    get project_milestone_url(@project_milestone), as: :json
    assert_response :success
  end

  test "should update project_milestone" do
    patch project_milestone_url(@project_milestone), params: { project_milestone: { milestone_belongs_to: @project_milestone.milestone_belongs_to, project_id: @project_milestone.project_id } }, as: :json
    assert_response 200
  end

  test "should destroy project_milestone" do
    assert_difference('ProjectMilestone.count', -1) do
      delete project_milestone_url(@project_milestone), as: :json
    end

    assert_response 204
  end
end
