CREATE DATABASE bioverse;

CREATE TABLE todo(
  ticket_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(20) UNIQUE,
  description VARCHAR(255),
  status VARCHAR(255),
  response VARCHAR(255)
);