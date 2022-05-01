# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "📃 Seeding data..."

Review.create(
  title: "Very cool!",
  description: "I like this a lot, would brighten it up some more though",
  rating: 4,
  renovation_id: 4,
  user_id: 1
)

puts "✅ Done seeding"
