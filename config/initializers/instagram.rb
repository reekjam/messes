require 'instagram'

CALLBACK_URL = 'http://lvh.me:3000/oauth/callback/'
IG_CLIENT_ID = '76c97b573e6b444c857254a795925444'
IG_CLIENT_SECRET = 'adcab0f7e31345a58b4594e08566d255'

Instagram.configure do |config|
  config.client_id = IG_CLIENT_ID
  config.client_secret = IG_CLIENT_SECRET
end

