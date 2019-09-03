SELECT * FROM post
INNER JOIN movie_user ON post.user_id = movie_user.user_id
WHERE post.post_id IN (SELECT post_id
FROM favorite
WHERE favorite.user_id = $1);


-- --gets all liked posts ids
-- SELECT post_id FROM favorite
-- WHERE user_id = $1;

