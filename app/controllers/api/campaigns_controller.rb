class Api::CampaignsController < ApplicationController

  def create
    @campaign = Campaign.new(
      title: campaign_params[:title],
      manager_id: campaign_params[:manager_id]
    )
    if @campaign.save
      @campaign_id = Campaign.find_by(title: @campaign.title).id
      campaign_params[:members].each do |member|
        needed_id = User.find_by(username: member).id
        Membership.create(campaign_id: @campaign_id, member_id: needed_id)
        Approvership.create(campaign_id: @campaign_id, approver_id: needed_id)
      end
      @campaigns = current_user.campaigns
      render "api/campaigns/index"
    else
      render json: ["Campaign creation failed."], status: 422
    end
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
    params.require(:campaign).permit(:title, :manager_id, members: [], approvers: [])
  end

end
