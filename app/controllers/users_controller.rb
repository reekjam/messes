class UsersController < ApplicationController
  def index
    client = Instagram.client(:access_token => session[:access_token])
    @user = client.user
    @photos = client.user_recent_media

    @months = Date::ABBR_MONTHNAMES
  end
end