post '/answers' do
  # gather info from the form

  answer = Answer.new(
    user_id: current_user.id,
    question_id: params[:question_id],
    content: params[:content]
  )
  if answer.save
    redirect '/working'
  else
    @errors = answer.errors.full_messages
    @questions = Question.all.sample(3)

    erb :timeclock
  end
  # redirect to next page (currently working)
end
