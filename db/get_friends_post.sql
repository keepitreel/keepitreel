SELECT post.*, movie_user.user_id, movie_user.avatarurl, movie_user.email,movie_user.name,movie_user.username FROM post
INNER JOIN movie_user ON post.user_id = movie_user.user_id
WHERE post.user_id IN (SELECT following_user_id
FROM following
WHERE following.user_id = $1)
ORDER BY time DESC;





-- SELECT * FROM post
-- WHERE post.user_id IN (SELECT following_user_id
-- FROM following
-- WHERE following.user_id = $1);

-- SELECT * FROM post
-- WHERE user_id IN (SELECT following_user_id
-- FROM following
-- WHERE user_id = $1);

-- SELECT following_user_id FROM following    //gets list of all friends of user_id
-- WHERE user_id = $1;

