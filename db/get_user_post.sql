SELECT * FROM post
FULL OUTER JOIN movie_user ON post.user_id = movie_user.user_id
WHERE post.user_id =$1;


