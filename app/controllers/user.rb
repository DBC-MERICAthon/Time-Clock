get '/' do
  # If they aren't logged in, redirect to login
  # Else, show them the clock in page
  erb :test
end

get '/login' do
	if current_user
	  redirect '/'
	else
 	 erb :login
	end
  # Show the login page
end

post '/login' do
  # Someone is requesting to log in
  # check username
  # check password

	user = User.find_by(username: params[:username])
	
	if user && user.password == params[:password] 
		#we need to set a session for the current user
		#p 'success'
		session[:user_id] = user.id
		redirect '/'
	else
		#render the login page again with errors displayed
		@error = 'Your username or password are invalid.'
		erb :login
	end
end

get '/logout' do
  session[:user_id] = nil
  redirect '/'
end

get '/signup' do
	if current_user
		redirect '/'
	else
		erb :signup
	end
end

post '/users' do
	if params[:password] == params[:verify_password]
		new_user = User.new(username: params[:username], password: params[:password])
		if new_user.save
			session[:user_id] = new_user.id
		else
			@errors = new_user.errors.full_messages
			erb :signup
		end
	else
		@errors = ['Your passwords don\'t match']
		erb :signup
	end
end