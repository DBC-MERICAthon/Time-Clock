get '/timeclock' do
  # if user is logged in show the page
    erb :timeclock
  # else redirect back to login
end

get '/working' do
  @start_time = current_user.answers.last.created_at
  p @start_time
  erb :working
end

get '/clockout' do
  erb :clockout
end