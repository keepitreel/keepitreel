
SELECT DISTINCT ON (post.user_id) post.*, movie_user.user_id, movie_user.avatarurl, movie_user.email,movie_user.name,movie_user.username
FROM post
INNER JOIN movie_user ON post.user_id=movie_user.user_id
WHERE post.user_id IN (SELECT following_user_id
FROM following
WHERE following.user_id = $1)
ORDER BY post.user_id, post.time DESC;




-- this returns the most recent posts of each of the users the user_id is following




