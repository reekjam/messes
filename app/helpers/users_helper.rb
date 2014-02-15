module UsersHelper
  def month_options
    @months = Date::ABBR_MONTHNAMES
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
end