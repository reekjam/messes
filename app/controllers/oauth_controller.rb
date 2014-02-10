class OauthController < ApplicationController
  def connect
    redirect_to Instagram.authorize_url(:redirect_uri => CALLBACK_URL )
  end

  def callback
    response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
    session[:access_token] = response.access_token
    redirect_to users_index_path
  end

  def logout
    reset_session
    redirect_to users_home_path
  end
end