class RenovationsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  def index
    renovations = Renovation.all
    render json: renovations
  end

  def create
    user = User.find_by(id: session[:user_id])
    renovation = user.renovations.create!(renovation_params)
    render json: renovation, status: :created
  end

  def update
    renovation = Renovation.find_by(id: params[:id])
      renovation.update!(renovation_params)
      render json: renovation
  end 

  def destroy
    renovation = Renovation.find(params[:id])
    renovation.destroy
  end

  private

  def authorize
    return render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  def renovation_params
    params.permit(:title, :location, :room, :cost, :before_image, :during_image, :after_image, :description, :likes)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
