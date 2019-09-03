SELECT * FROM comment
INNER JOIN movie_user ON comment.user_id = movie_user.user_id
WHERE comment.post_id = $1;

