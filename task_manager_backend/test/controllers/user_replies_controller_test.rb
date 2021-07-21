require 'test_helper'

class UserRepliesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_reply = user_replies(:one)
  end

  test "should get index" do
    get user_replies_url, as: :json
    assert_response :success
  end

  test "should create user_reply" do
    assert_difference('UserReply.count') do
      post user_replies_url, params: { user_reply: { reply_id: @user_reply.reply_id, user_id: @user_reply.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_reply" do
    get user_reply_url(@user_reply), as: :json
    assert_response :success
  end

  test "should update user_reply" do
    patch user_reply_url(@user_reply), params: { user_reply: { reply_id: @user_reply.reply_id, user_id: @user_reply.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_reply" do
    assert_difference('UserReply.count', -1) do
      delete user_reply_url(@user_reply), as: :json
    end

    assert_response 204
  end
end
