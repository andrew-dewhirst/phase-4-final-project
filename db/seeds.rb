# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "📃 Seeding data..."

Review.create(
  title:"My First Review!",
  description:"This kitchen looks great.",
  rating:"5",
  user_id:"3",
  renovation_id:"1"
)

puts "✅ Done seeding"
