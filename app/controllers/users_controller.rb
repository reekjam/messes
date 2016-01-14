class UsersController < ApplicationController
  def index
    client = Instagram.client(:access_token => session[:access_token])
    @user = client.user
    photos = client.user_recent_media(count: 33)

    @delta = get_recent_media(client, photos.last.id)

    while @delta.count > 1 do
      @delta = client.user_recent_media(count: 33, max_id: photos.last.id)
      photos << @delta
      photos.flatten!
    end

    @sorted_photos = []
    photos.each do |photo|
      if params[:month] == get_month(photo.created_time)
        @sorted_photos << photo
      end
    end
    @years = Array.new
    @sorted_photos.each do |sorted_photo|
      @years << DateTime.strptime( sorted_photo[:created_time].to_s, '%s' ).year
    end
    @years.uniq! unless @years.count == 1
  end

  def get_recent_media client, max_id
    client.user_recent_media count: 33, max_id: max_id
  end

  def get_month(timestamp)
    Date::MONTHNAMES[DateTime.strptime(timestamp, '%s').month]
  end
end