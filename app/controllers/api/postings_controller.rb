class Api::PostingsController < ApplicationController

  def create
  end

  def index
    @execution = Execution.find(posting_params[:execution_id])
    @postings = @execution.postings
  end

  def show
  end

  def destroy
  end

  def posting_params
    params.require(:posting).permit(:title, :comments, :link_url, :execution_id)
  end


end
