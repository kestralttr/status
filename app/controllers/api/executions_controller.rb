class Api::ExecutionsController < ApplicationController

  def create
  end

  def index
    @campaign = Campaign.find(execution_params[:campaignId])
    @executions = @campaign.executions.where(:media_type => "#{execution_params[:mediaType]}")
  end

  def show
  end

  def destroy
  end

  def execution_params
    params.require(:execution).permit(:title, :mediaType, :creatorId, :campaignId, :approved, :format, :info)
  end

end
