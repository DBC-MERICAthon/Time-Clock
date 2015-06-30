User.create(username:'bk', password: '1234')
User.create(username:'ek', password: '1234')
User.create(username:'ck', password: '1234')

Question.create(content: 'Where were you born?')
Question.create(content: 'Where did you go to high school?')
Question.create(content: 'What\'s your first memory of your granparents?')
Question.create(content: 'What was your first car?')
Question.create(content: 'Who was your first date?')

Answer.create(user_id: 1, question_id: 1, content: 'Berkeley, CA')
Answer.create(user_id: 2, question_id: 1, content: 'San Jose, CA')
Answer.create(user_id: 3, question_id: 1, content: 'San Francisco, CA')

Answer.create(user_id: 1, question_id: 2, content: 'Fairfield, CA')
Answer.create(user_id: 2, question_id: 2, content: 'Santa Clara, CA')
Answer.create(user_id: 3, question_id: 2, content: 'San Francisco, CA')

Answer.create(user_id: 1, question_id: 4, content: '1989 Chevy Blazer')
Answer.create(user_id: 2, question_id: 4, content: '1999 VW Jetta')
Answer.create(user_id: 3, question_id: 4, content: '1999 Lincoln Navigator')
