\c music

INSERT INTO artist (name, age, nationality, gender, genre) VALUES
                   ('justin bieber', 28, 'canadian', 'male', 'pop'),
                   ('enrique iglesias', 45, 'spanish', 'male', 'pop'),
                   ('shakira', 40, 'cuban', 'female', 'pop');

INSERT INTO song (name, artist, album, time, is_favorite) VALUES 
                 ('bailando', 'enrique iglesias', 'sex and love', '2014', true),
                 ('el perdedor', 'enrique iglesias', 'sex and love', '2014', true),
                 ('hero', 'enrique iglesias', 'sex and love', '2014', false),
                 ('cuando me enamoro', 'enrique iglesias', 'sex and love', '2014', true),
                 ('love yourself', 'justin bieber', 'purpose', '2015', true),
                 ('sorry', 'justin bieber', 'purpose', '2015', false),
                 ('purpose', 'justin bieber', 'purpose', '2015', false),
                 ('no pressue', 'justin bieber', 'purpose', '2015', false),
                 ('no sense', 'justin bieber', 'purpose', '2015', true)
