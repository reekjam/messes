module UsersHelper
  def month_options
    @months = Date::MONTHNAMES
    @months.each do |month|
      unless month.nil?
        month
      end
    end
  end

  def year_options
    @years = Array.new
    @photos.each do |photo|
      @years << DateTime.strptime( photo[:created_time].to_s, '%s' ).year
    end
    @years = @years.uniq!
  end

  def get_year(timestamp)
    DateTime.strptime(timestamp, '%s').year
  end

  def get_likes(photo)
    photo.likes[:count].blank? ? "0" : photo
  end

  def get_date(photo)
    Time.at(photo.created_time.to_i).strftime("%m/%d")
  end
end