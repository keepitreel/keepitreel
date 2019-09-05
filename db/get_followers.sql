SELECT Distinct following_user_id
FROM following
WHERE following.user_id = $1;