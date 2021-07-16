-- Revert oblog:initialization from pg

BEGIN;

DROP TABLE IF EXISTS post, category;

COMMIT;