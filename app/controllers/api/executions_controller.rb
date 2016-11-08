class Api::ExecutionsController < ApplicationController

  def create
    @execution = Execution.new(execution_params)

    if @execution.save
      @executions = @execution.campaign.executions
      render "api/executions/index"
    else
      render json: @execution.errors.full_messages, status: 422
    end

  end

  def index
    @campaign = Campaign.find(execution_params[:campaign_id])
    @executions = @campaign.executions.where(:media_type => "#{execution_params[:media_type]}")
  end

  def show
  end

  def destroy
  end

  def execution_params
    params.require(:execution).permit(:title, :media_type, :creator_id, :campaign_id, :approved, :format, :info)
  end

end
