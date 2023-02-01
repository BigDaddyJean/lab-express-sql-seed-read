DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

-- Move into the db
\c music
-- CREATE SCHEMA tuner;

CREATE TABLE song (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  time TEXT,
  is_favorite boolean
);

CREATE TABLE artist (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INT NOT NULL,
  nationality TEXT,
  gender TEXT,
  genre TEXT
);
