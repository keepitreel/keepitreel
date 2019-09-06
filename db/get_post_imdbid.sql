SELECT * FROM post
INNER JOIN movie_user ON post.user_id = movie_user.user_id
WHERE post.imdbid = $1;