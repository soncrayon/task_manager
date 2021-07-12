require 'test_helper'

class AssignersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @assigner = assigners(:one)
  end

  test "should get index" do
    get assigners_url, as: :json
    assert_response :success
  end

  test "should create assigner" do
    assert_difference('Assigner.count') do
      post assigners_url, params: { assigner: { name: @assigner.name, title: @assigner.title } }, as: :json
    end

    assert_response 201
  end

  test "should show assigner" do
    get assigner_url(@assigner), as: :json
    assert_response :success
  end

  test "should update assigner" do
    patch assigner_url(@assigner), params: { assigner: { name: @assigner.name, title: @assigner.title } }, as: :json
    assert_response 200
  end

  test "should destroy assigner" do
    assert_difference('Assigner.count', -1) do
      delete assigner_url(@assigner), as: :json
    end

    assert_response 204
  end
end
