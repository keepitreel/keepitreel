UPDATE movie_user 
SET password=$2
WHERE user_id = $1
returning *


