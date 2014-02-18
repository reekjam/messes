require 'instagram'

CALLBACK_URL = 'http://lvh.me:3000/oauth/callback/'

Instagram.configure do |config|
  config.client_id = "76c97b573e6b444c857254a795925444"
  config.client_secret = "adcab0f7e31345a58b4594e08566d255"
end