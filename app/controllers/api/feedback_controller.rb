class Api::FeedbackController < ApplicationController

  def create
    @feedback_item = Feedback.new(feedback_params)

    if @feedback_item.save
      @feedback = @feedback_item.posting.feedback
      render "api/feedback/index"
    else
      render json: @feedback_item.errors.full_messages, status: 422
    end
  end

  def index
    @posting = Posting.find(feedback_params[:posting_id])
    @feedback = @posting.feedback
  end

  def destroy
  end

  def feedback_params
    params.require(:feedback).permit(:comments, :link_url, :posting_id, :creator_id)
  end

end
