get '/' do
  # If they aren't logged in, redirect to login
  # Else, show them the clock in page
  return '<h1>It works</h1>'
end

get '/login' do
  # Show the login page
  erb :login
end

post '/login' do
  # Someone is requesting to log in
  # check username
  # check password

	user = User.find_by(username: params[:username])
	if user.password == params[:password]
		#we need to set a session for the current user
		p 'success'
	else
		#render the login page again with errors displayed
		@error = 'Your username or password are invalid.'
		erb :login
	end
end

get '/logout' do
  # Log them out
end

