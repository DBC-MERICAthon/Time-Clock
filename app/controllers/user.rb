get '/' do
  # If they aren't logged in, redirect to login
  # Else, show them the clock in page
  return '<h1>It works</h1>'
end

get '/login' do
  # Show the login page
  return 'This is the log in page'
end

post '/login' do
  # Someone is requesting to log in
  # check username
  # check password
end

get '/logout' do
  # Log them out
end
