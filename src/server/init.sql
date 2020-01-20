CREATE TABLE comments (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL
);

INSERT INTO comments (name, comment)
VALUES ('New Fan', 'I love the service here!');