get '/photos' do

  @photos = Photo.where(user_id: current_user.id)
  erb :photos
end
post '/photos' do
  # save a photo
  p params

  photo = Photo.new(
    user_id: current_user.id,
    path: params[:path],
  )
  if photo.save
    status 201
    return "Photo saved"
  else
    status 400
    return "Photo failed"
  end
end
