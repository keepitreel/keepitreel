SELECT * FROM post
FULL OUTER JOIN movie_user ON post.user_id = movie_user.user_id
ORDER BY time DESC;


