module ApplicationHelper
  def abbr_months
    return I18n.t("date.abbr_month_names").compact!
  end
end
