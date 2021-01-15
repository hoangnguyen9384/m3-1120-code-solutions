const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.post('/api/grades', (req, res, next) => {
  const { name, course, score } = req.body;
  const values = [name, course, score];

  if (!name || !course || !score) {
    res.status(400).json({ error: 'must input score, name, and course' });
    return;
  } else if (parseInt(score, 10) < 0) {
    res.status(400).json({ error: 'Grade must be a positive integer.' });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
            value ($1, $2, $3)
            returning *;
  `;

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).send(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const { name, course, score } = req.body;
  const { gradeId } = req.params;
  if (!parseInt(gradeId, 10)) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
  } else if (score < 0) {
    return res.status(400).json({
      error: 'Grade must be a positive integer.'
    });
  }
  const values = [name, course, score, gradeId];
  const sql = `
    update "grades"
       set "name" = $1, "course" = $2, "score" = $3
    where "gradeId" = $4
    returning *;
  `;
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'Invalid gradeId or missing name, course, or score.'
        });
      } else {
        res.status(200).json({ grade });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = (req.params.gradeId);
  if (!gradeId || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const text = `DELETE FROM "grades"
                WHERE "gradeId" = $1
                RETURNING *`;
  const values = [gradeId];
  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (grade) {
        res.status(204);
      } else {
        res.status(404).json({
          error: `Cannot find grade with ${gradeId}`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`listening on port ${port}!`);
});
