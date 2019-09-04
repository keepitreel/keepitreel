UPDATE post
SET user_id=$2,text=$3,imdbid=$4,posterurl=$5,rating=$6, time=$7, genre=$8, title=$9, blogtitle=$10
WHERE post_id = $1
returning *


-- updates post per post_id given