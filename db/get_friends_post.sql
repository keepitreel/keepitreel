SELECT * FROM post
WHERE user_id IN (SELECT following_user_id
FROM following
WHERE user_id = $1);




-- SELECT following_user_id FROM following    //gets list of all friends of user_id
-- WHERE user_id = $1;
