SELECT movie_user.user_id, movie_user.avatarurl, movie_user.email,movie_user.name,movie_user.username FROM movie_user 
WHERE username = $1
