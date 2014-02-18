require 'instagram'

CALLBACK_URL = "http://lvh.me:3000/oauth/callback/"

Instagram.configure do |config|
  config.client_id = ENV["IG_CLIENT_ID"]
  config.client_secret = ENV["IG_CLIENT_SECRET"]
end