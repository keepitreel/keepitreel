UPDATE movie_user 
SET password=$2
WHERE username = $1
returning *


