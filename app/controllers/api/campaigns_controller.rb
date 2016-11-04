class Api::CampaignsController < ApplicationController

  def create
  end

  def index
    @campaigns = current_user.campaigns
  end

  def show
    @campaign = Campaign.find(params[:id])
  end

  def destroy
  end

  def campaign_params
    params.require(:campaign).permit(:title,:manager_id)
  end

end
