get '/' do
  if current_user
    @questions = Question.all.sample(3)
    erb :timeclock
  else
    redirect '/login'
  end
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
  user = User.find_by(username: params[:username])

  if user && user.password == params[:password]
    session[:user_id] = user.id
    redirect '/'
  else
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
    new_user = User.new(
      username: params[:username],
      password: params[:password]
    )
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
