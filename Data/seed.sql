TRUNCATE TABLE peoples, cars;

INSERT INTO peoples (name, age) VALUES ('Ronaldo P.', 30);
INSERT INTO peoples (name, age) VALUES ('Pablo E.', 20);
INSERT INTO peoples (name, age) VALUES ('Michael J.', 40);
INSERT INTO peoples (name, age) VALUES ('Messi L.', 50);
INSERT INTO peoples (name, age) VALUES ('Sarah K.', 34);
INSERT INTO peoples (name, age) VALUES ('Sandra P.', 28);
INSERT INTO peoples (name, age) VALUES ('Liz F.', 41);


INSERT INTO cars (userId, make, model, year) VALUES ((SELECT id from peoples where name='Sandra P.'), 'Toyota', 'Tundra', 2022);
INSERT INTO cars (userId, make, model, year) VALUES ((SELECT id from peoples where name='Messi L.'), 'Honda', 'Accord', 2020);
INSERT INTO cars (userId, make, model, year) VALUES ((SELECT id from peoples where name='Ronaldo P.'), 'Hyundai', 'Elantra', 2018);
INSERT INTO cars (userId, make, model, year) VALUES ((SELECT id from peoples where name='Pablo E.'), 'Acura', 'Ilx', 2019);
INSERT INTO cars (userId, make, model, year) VALUES ((SELECT id from peoples where name='Liz F.'), 'Honda', 'Civic', 2023);
