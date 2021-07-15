-- Verify oblog:initialization on pg

BEGIN;

SELECT id FROM post WHERE false;
SELECT id FROM category WHERE false;

ROLLBACK;
