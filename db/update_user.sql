UPDATE movie_user 
SET username=$2,name=$3,email=$4,avatarurl=$5
WHERE user_id = $1
returning *