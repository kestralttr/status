class Api::FeedbackController < ApplicationController

  def create
  end

  def index
  end

  def destroy
  end

  def feedback_params
    params.require(:feedback).permit(:comments, :link_url, :posting_id)
  end

end
