DROP DATABASE IF EXISTS records;

CREATE DATABASE records;

\c records;

CREATE TABLE records (
    id SERIAL PRIMARY KEY,
    album_title TEXT NOT NULL,
    artist TEXT NOT NULL,
    year INTEGER NOT NULL,
    condition TEXT NOT NULL,
    price INTEGER NOT NULL,
    image TEXT NOT NULL
)