class Api::CampaignsController < ApplicationController

  def create
  end

  def index
    @campaigns = current_user.campaigns
  end

  def show
  end

  def destroy
  end

  def campaign_params
    params.require(:campaign).permit(:title,:manager_id,:membership_id,:approvership_id)
  end

end
