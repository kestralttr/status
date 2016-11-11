class Api::PostingsController < ApplicationController

  def create
    @posting = Posting.new(posting_params)

    if @posting.save
      @postings = @posting.execution.postings.reverse
      render "api/postings/index"
    else
      render json: @posting.errors.full_messages, status: 422
    end
  end

  def index
    @execution = Execution.find(posting_params[:execution_id])
    @postings = @execution.postings.reverse
  end

  def show
    @posting = Posting.find(params[:id])
  end

  def destroy
  end

  def posting_params
    params.require(:posting).permit(:title, :comments, :link_url, :execution_id)
  end


end
