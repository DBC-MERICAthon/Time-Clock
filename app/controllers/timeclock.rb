get '/timeclock' do
  # if user is logged in show the page
    erb :timeclock
  # else redirect back to login
end
