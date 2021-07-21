class UserNotesController < ApplicationController
  before_action :set_user_note, only: [:show, :update, :destroy]

  # GET /user_notes
  def index
    @user_notes = UserNote.all

    render json: @user_notes
  end

  # GET /user_notes/1
  def show
    render json: @user_note
  end

  # POST /user_notes
  def create
    @user_note = UserNote.new(user_note_params)

    if @user_note.save
      render json: @user_note, status: :created, location: @user_note
    else
      render json: @user_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_notes/1
  def update
    if @user_note.update(user_note_params)
      render json: @user_note
    else
      render json: @user_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_notes/1
  def destroy
    @user_note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_note
      @user_note = UserNote.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_note_params
      params.require(:user_note).permit(:user_id, :note_id)
    end
end
