Movie.destroy_all
Comparison.destroy_all

dark_knight = Movie.create!(title: "The Dark Knight", year: 2008)
pulp_fiction = Movie.create!(title: "Pulp Fiction", year: 1994)
citizen_kane = Movie.create!(title: "Citizen Kane", year: 1941)

Comparison.create!(superior_movie_id: dark_knight.id, inferior_movie_id: citizen_kane.id)
Comparison.create!(superior_movie_id: citizen_kane.id, inferior_movie_id: pulp_fiction.id)