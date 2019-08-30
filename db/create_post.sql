INSERT INTO post (user_id, text, imdbid, posterurl, rating, time, genre)
VALUES ($1, $2,$3,$4,$5,$6,$7);

SELECT * FROM post
WHERE user_id = $1;
