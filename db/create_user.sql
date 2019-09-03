INSERT INTO movie_user (username, name, password, email)
VALUES ($1,$2,$3,$4)
returning *





-- CREATE TABLE movie_user(
-- user_id SERIAL NOT NULL PRIMARY KEY,
-- user_id int REFERENCES userssql(user_id),
-- username text,
-- name text,
-- password text,
-- email text,
-- avatarurl text
-- )