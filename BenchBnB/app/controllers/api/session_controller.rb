class Api::SessionController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render(
        json: {
          base: ["Invalid username or password"]
        },
        status: 401
      )
    end
  end

  def destroy
    if !current_user
      render json: {
          base: ["Nobody signed in"]
        }, status: 404
    else
      current_user.reset_session_token!
      session[:session_token] = nil
      render json: {}
    end
  end

end
