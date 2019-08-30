INSERT INTO following (user_id)
VALUES ($1);
SELECT follow_id FROM following
WHERE user_id = $1;

-- this is not returning follow_id ask edson this should work