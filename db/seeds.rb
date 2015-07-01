User.create(username: 'bk', password: '1234')
User.create(username: 'ek', password: '1234')
User.create(username: 'ck', password: '1234')

File.open('questions.txt').each do |f|
  Question.create(content: f.chomp)
end
