DELETE FROM comment
WHERE post_id = $1 ;
DELETE FROM post
WHERE post_id = $1;
