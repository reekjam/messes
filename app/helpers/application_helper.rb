module ApplicationHelper
  def abbr_months
    @months = Date::ABBR_MONTHNAMES
    return @months.compact
  end
end
