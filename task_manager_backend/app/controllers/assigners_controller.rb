class AssignersController < ApplicationController
  before_action :set_assigner, only: [:show, :update, :destroy]

  # GET /assigners
  def index
    @assigners = Assigner.all

    render json: @assigners
  end

  # GET /assigners/1
  def show
    render json: @assigner
  end

  # POST /assigners
  def create
    @assigner = Assigner.new(assigner_params)

    if @assigner.save
      render json: @assigner, status: :created, location: @assigner
    else
      render json: @assigner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /assigners/1
  def update
    if @assigner.update(assigner_params)
      render json: @assigner
    else
      render json: @assigner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /assigners/1
  def destroy
    @assigner.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_assigner
      @assigner = Assigner.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def assigner_params
      params.require(:assigner).permit(:name, :title)
    end
end
