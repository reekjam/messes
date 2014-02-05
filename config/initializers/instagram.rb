require 'instagram'

CALLBACK_URL = "http://lvh.me:3000/oauth/callback/"

Instagram.configure do |config|
  config.client_id = "d90c75a1e8d1440c9ea8bdad2e31e52d"
  config.client_secret = "9c75461600594cae993f424424bfc79e"
end