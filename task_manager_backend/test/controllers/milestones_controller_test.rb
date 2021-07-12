require 'test_helper'

class MilestonesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @milestone = milestones(:one)
  end

  test "should get index" do
    get milestones_url, as: :json
    assert_response :success
  end

  test "should create milestone" do
    assert_difference('Milestone.count') do
      post milestones_url, params: { milestone: { description: @milestone.description, name: @milestone.name, project_id: @milestone.project_id } }, as: :json
    end

    assert_response 201
  end

  test "should show milestone" do
    get milestone_url(@milestone), as: :json
    assert_response :success
  end

  test "should update milestone" do
    patch milestone_url(@milestone), params: { milestone: { description: @milestone.description, name: @milestone.name, project_id: @milestone.project_id } }, as: :json
    assert_response 200
  end

  test "should destroy milestone" do
    assert_difference('Milestone.count', -1) do
      delete milestone_url(@milestone), as: :json
    end

    assert_response 204
  end
end
