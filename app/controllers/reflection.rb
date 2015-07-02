post '/reflections' do
  reflection = Reflection.new(user_id: current_user.id, content: params[:content], mood: params[:mood])
  if reflection.save
    redirect '/logout'
  end
end
