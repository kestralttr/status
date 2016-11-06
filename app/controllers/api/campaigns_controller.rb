class Api::CampaignsController < ApplicationController

  def create
    @campaign = Campaign.new(
      title: params[:campaign][:title],
      manager_id: params[:campaign][:manager_id]
    )
    if @campaign.save
      @campaign_id = Campaign.find_by(title: @campaign.title).id
      params[:campaign][:members].each do |member|
        p "Should be guest.id (1):#{User.find_by(username: member).id}"
        needed_id = User.find_by(username: member).id
        Membership.create(campaign_id: @campaign_id, member_id: needed_id)
        Approvership.create(campaign_id: @campaign_id, approver_id: needed_id)
      end
      render "api/campaigns/show"
    else
      render json: @campaign.errors.full_messages, status: 422
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

  # def campaign_params
  #   params.require(:campaign).permit(:title, :manager_id, :members, :approvers)
  # end

end
