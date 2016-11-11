class Api::FeedbackController < ApplicationController

  def create
    @feedback_item = Feedback.new(feedback_params)

    if @feedback_item.save
      @feedback = @feedback_item.posting.feedback
      @creator = User.find(current_user.id)
      render "api/feedback/index"
    else
      render json: @feedback_item.errors.full_messages, status: 422
    end
  end

  def index
    @posting = Posting.find(feedback_params[:posting_id])
    initial_feedback_array = @posting.feedback
    @feedback = initial_feedback_array.map do |feedback_item|
      creator_username = User.find(feedback_item.creator_id)
      # feedback_item[:creator_username] = User.find(feedback_item.creator_id).username
      feedback_item
    end
  end

  def destroy
  end

  def feedback_params
    params.require(:feedback).permit(:comments, :link_url, :posting_id, :creator_id, :creator_username)
  end

end
