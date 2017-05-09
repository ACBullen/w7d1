# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

todo1 = {title: "Urinate", body: "Copiuous amounts of urine" }
todo2 = {title: "Eat", body: "Copiuous amounts of food" }
todo3 = {title: "Banter", body: "Copiuous amounts verbosity" }

Todo.create(todo1)
Todo.create(todo2)
Todo.create(todo3)
