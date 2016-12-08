class Api::UsersController < ApplicationController

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      #json stuff
      render "api/users/show"
    else
      #json stuff
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    str = user_params[:str]
    if str == ""
      @users = User.all
    else
      @users = []
      User.all each do |user|
        if user.username.slice(0,str.length) == str
          @users << user
        end
      end
    end
  end

  def user_params
    params.require(:user).permit(:username,:password,:str)
  end


end
