CREATE DATABASE tododb;

CREATE TABLE todo(
    item_id SERIAL PRIMARY KEY,
    description VARCHAR(360)
);