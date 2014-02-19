require 'instagram'

CALLBACK_URL = ENV['CALLBACK_URL']

Instagram.configure do |config|
  config.client_id = ENV['IG_CLIENT_ID']
  config.client_secret = ENV['IG_CLIENT_SECRET']
end
