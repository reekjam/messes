class UsersController < ApplicationController
  def index
    client = Instagram.client(:access_token => session[:access_token])
    @user = client.user
    @photos = client.user_recent_media(count: -1)
    @months = Date::ABBR_MONTHNAMES
    @years = Array.new
    @photos.each do |photo|
      @years << DateTime.strptime( photo[:created_time].to_s, '%s' ).year
    end
    @years = @years.uniq!
  end
end