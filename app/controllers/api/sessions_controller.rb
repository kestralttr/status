class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["username not recognized"], status: 422
    end
  end

  def destroy
    if !current_user
      render json: "no one logged in", status: 404
    else
      logout(current_user)
      #json stuff
      empty_object = {}
      render json: empty_object
    end
  end

end
