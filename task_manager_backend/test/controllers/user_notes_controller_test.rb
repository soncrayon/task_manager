require 'test_helper'

class UserNotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_note = user_notes(:one)
  end

  test "should get index" do
    get user_notes_url, as: :json
    assert_response :success
  end

  test "should create user_note" do
    assert_difference('UserNote.count') do
      post user_notes_url, params: { user_note: { note_id: @user_note.note_id, user_id: @user_note.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show user_note" do
    get user_note_url(@user_note), as: :json
    assert_response :success
  end

  test "should update user_note" do
    patch user_note_url(@user_note), params: { user_note: { note_id: @user_note.note_id, user_id: @user_note.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy user_note" do
    assert_difference('UserNote.count', -1) do
      delete user_note_url(@user_note), as: :json
    end

    assert_response 204
  end
end
