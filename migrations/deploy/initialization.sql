-- Deploy oblog:initialization to pg

BEGIN;

CREATE TABLE IF NOT EXISTS category (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    label TEXT NOT NULL,
    route TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS post (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug TEXT NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category_id INTEGER REFERENCES category(id)
);

COMMIT;
