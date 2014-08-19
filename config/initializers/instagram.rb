require 'instagram'

if Rails.env == 'development'
  Instagram.configure do |config|
    config.client_id = '76c97b573e6b444c857254a795925444'
    config.client_secret = 'adcab0f7e31345a58b4594e08566d255'
  end
else
  Instagram.configure do |config|
    config.client_id = ENV['IG_CLIENT_ID']
    config.client_secret = ENV['IG_CLIENT_SECRET']
  end
end

