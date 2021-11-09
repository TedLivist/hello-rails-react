# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Greeting.find_or_create_by(message: 'Hello monsieur!')
Greeting.find_or_create_by(message: 'Bonnuit Alejandro')
Greeting.find_or_create_by(message: 'Bon apres midi mademoiselle')
Greeting.find_or_create_by(message: 'Buenos dias Sergio!')
Greeting.find_or_create_by(message: 'Buenas noches mi amor')