class UserRepliesController < ApplicationController
  before_action :set_user_reply, only: [:show, :update, :destroy]

  # GET /user_replies
  def index
    @user_replies = UserReply.all

    render json: @user_replies
  end

  # GET /user_replies/1
  def show
    render json: @user_reply
  end

  # POST /user_replies
  def create
    @user_reply = UserReply.new(user_reply_params)

    if @user_reply.save
      render json: @user_reply, status: :created, location: @user_reply
    else
      render json: @user_reply.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_replies/1
  def update
    if @user_reply.update(user_reply_params)
      render json: @user_reply
    else
      render json: @user_reply.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_replies/1
  def destroy
    @user_reply.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_reply
      @user_reply = UserReply.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_reply_params
      params.require(:user_reply).permit(:user_id, :reply_id)
    end
end
