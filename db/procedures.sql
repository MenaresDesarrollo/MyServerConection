USE libronotas;

DELIMITER $$
USE `libronotas`$$

CREATE PROCEDURE `addNotes` (
  IN _id INT,
  IN _escritor VARCHAR(45),
  IN _nota INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO librnotas (escritor, nota)
    VALUES (_escritor, _nota);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE libronotas
    SET
    escritor = _escritor,
    nota = _nota
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END