require 'test_helper'

class ProjectTeamMembersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_team_member = project_team_members(:one)
  end

  test "should get index" do
    get project_team_members_url, as: :json
    assert_response :success
  end

  test "should create project_team_member" do
    assert_difference('ProjectTeamMember.count') do
      post project_team_members_url, params: { project_team_member: { project_id: @project_team_member.project_id, team_member_id: @project_team_member.team_member_id } }, as: :json
    end

    assert_response 201
  end

  test "should show project_team_member" do
    get project_team_member_url(@project_team_member), as: :json
    assert_response :success
  end

  test "should update project_team_member" do
    patch project_team_member_url(@project_team_member), params: { project_team_member: { project_id: @project_team_member.project_id, team_member_id: @project_team_member.team_member_id } }, as: :json
    assert_response 200
  end

  test "should destroy project_team_member" do
    assert_difference('ProjectTeamMember.count', -1) do
      delete project_team_member_url(@project_team_member), as: :json
    end

    assert_response 204
  end
end
