CREATE TABLE pets (id INTEGER PRIMARY KEY, name TEXT, species TEXT, age INTEGER, weight REAL, owner_id INTEGER);
INSERT INTO pets VALUES (1, 'Rex', 'dog', 4, 18.5, 1);
INSERT INTO pets VALUES (2, 'Mia', 'cat', 2, 4.1, 2);
INSERT INTO pets VALUES (3, 'Bubbles', 'fish', 1, 0.1, NULL);
INSERT INTO pets VALUES (4, 'Luna', 'cat', 7, 5.0, 1);
INSERT INTO pets VALUES (5, 'Max', 'dog', 9, 25.2, 3);
INSERT INTO pets VALUES (6, 'Coco', 'bird', 3, 0.4, 2);
INSERT INTO pets VALUES (7, 'Rocky', 'dog', 2, 12.0, NULL);
INSERT INTO pets VALUES (8, 'Tom', 'cat', 5, 4.8, 3);

CREATE TABLE owners (id INTEGER PRIMARY KEY, name TEXT, city TEXT);
INSERT INTO owners VALUES (1, 'Ana', 'Brussels');
INSERT INTO owners VALUES (2, 'Luis', 'Madrid');
INSERT INTO owners VALUES (3, 'Sofia', 'Brussels');
INSERT INTO owners VALUES (4, 'Omar', 'Paris');
