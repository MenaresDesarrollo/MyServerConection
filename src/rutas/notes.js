const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

router.get('/', (req, res) => {
  mysqlConnection.query("SELECT * FROM notas", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
      console.log("/principal");
    } else {
      console.log(err);
    }
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM notas WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM notas WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Nota eliminada" });
      } else {
        console.log(err);
      }
    }
  );
});


router.post('/add', (req, res) => {  
  const query = `    
    INSERT INTO notas SET ?
  `;

  const libronotasObj = {
    escritor: req.body.escritor,
    nota: req.body.nota
  }

  mysqlConnection.query(query, libronotasObj, (err, rows, fields) => {
    if (!err) {
      res.json({ Satatus: "Nota grabada" });
    } else {
      console.log(err);
    }
  });
});

router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { escritor, nota } = req.body;
  

  const query = `
    UPDATE notas SET 
    escritor = '${escritor}', 
    nota = '${nota}'
    where id = '${id}'
  `;

  mysqlConnection.query(query, [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: "Nota editada" });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
