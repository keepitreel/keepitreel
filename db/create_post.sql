INSERT INTO post (user_id, text, imdbid, posterurl, rating, time, genre, title)
VALUES ($1, $2,$3,$4,$5,$6,$7,$8);

SELECT * FROM post
WHERE user_id = $1;
