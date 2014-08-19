class OauthController < ApplicationController
  def connect
    if Rails.env.development?
      redirect_to Instagram.authorize_url(:redirect_uri => 'http://localhost:3000/oauth/callback')
    else 
      redirect_to Instagram.authorize_url(:redirect_uri => ENV['CALLBACK_URL'])
    end
  end

  def callback
    if Rails.env.development?
      response = Instagram.get_access_token(params[:code], :redirect_uri => 'http://localhost:3000/oauth/callback')
    else
      response = Instagram.get_access_token(params[:code], :redirect_uri => ENV['CALLBACK_URL'])
    end
    session[:access_token] = response.access_token
    redirect_to users_index_path
  end

  def logout
    reset_session
    redirect_to users_home_path
  end
end