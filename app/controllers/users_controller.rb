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
    binding.pry
  end

  def feed
    client = Instagram.client(:access_token => session[:access_token])
    @user = client.user
    @photos = client.user_recent_media(count: -1)

    @sorted_photos = []
    @photos.each do |photo|
      if params[:month] == get_month(photo.created_time)
        @sorted_photos << photo
      end
    end

    @years = Array.new
    @sorted_photos.each do |sorted_photo|
      @years << DateTime.strptime( sorted_photo[:created_time].to_s, '%s' ).year
    end
    @years.uniq!
  end

  def get_month(timestamp)
    Date::ABBR_MONTHNAMES[DateTime.strptime(timestamp, '%s').month]
  end
end