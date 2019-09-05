SELECT * FROM following
WHERE user_id = $1 AND following_user_id = $2;