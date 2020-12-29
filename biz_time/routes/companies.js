const express = require("express");
const slugify = require("slugify");
const ExpressError = require("../expressError")
const db = require("../db");

let router = new express.Router();


router.get("/", async function (req, res, next) {
    try {
      const results = await db.query(`SELECT * FROM companies`);

        return res.json({"companies:": results.rows});
    }
  
    catch (err) {
      return next(err);
    }
  });

router.get("/:code", async function (req, res, next) {
    try {
        const results = await db.query(`SELECT *
                    FROM companies
                    WHERE code = $1`,[req.params.code]);
        // console.log("results",results)
        if (results.rows.length == 0){
            throw new ExpressError(`No such company: ${code}`, 404);
        }
        let company = results.rows[0];
        return res.json(`{company: {${company.code}, ${company.name}, ${company.description}}}`)}
  
    catch (err) {
      return next(err);
    }
  });

router.post("/", async function (req, res, next) {
    try {
        const { name, description } = req.body;
        let code = slugify(name, {lower: true});

        const result = await db.query(
            `INSERT INTO companies (code, name, description) 
                VALUES ($1, $2, $3)
                RETURNING code, name, description`,
            [code, name, description]
        );

        // console.log("result",result);

        return res.json(result.rows[0]);
    }
  
    catch (err) {
      return next(err);
    }
});

router.put("/:code", async function (req, res, next) {
  try {
    const { name, description } = req.body;
    let code = req.params.code;
    // console.log("name:", name);
    // console.log("description:", description);
    // console.log("code:", code);

    const result = await db.query(
        `UPDATE companies SET name=$1, description=$2
            WHERE code = $3
            RETURNING code, name, description`,
        [name, description, code]
    );

    // console.log("result",result);
    if (result.rows.length === 0) {
        throw new ExpressError(`No such company: ${code}`, 404)
      } else {
        return res.json({"company": result.rows[0]});
      }
  }

  catch (err) {
    return next(err);
  }
})

router.delete("/:code", async function (req, res, next) {
  try {
      let code = req.params.code;
  
      const result = await db.query(
          `DELETE FROM companies
              WHERE code=$1
              RETURNING code`,
          [code]);
  
      if (result.rows.length == 0) {
      throw new ExpressError(`No such company: ${code}`, 404)
      } else {
      return res.json({"status": "deleted"});
      }
  }
  catch (err) {
      return next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    let {amt, paid} = req.body;
    let id = req.params.id;
    let paidDate = null;

    const currResult = await db.query(
          `SELECT paid
           FROM invoices
           WHERE id = $1`,
        [id]);

    if (currResult.rows.length === 0) {
      throw new ExpressError(`No such invoice: ${id}`, 404);
    }

    const currPaidDate = currResult.rows[0].paid_date;

    if (!currPaidDate && paid) {
      paidDate = new Date();
    } else if (!paid) {
      paidDate = null
    } else {
      paidDate = currPaidDate;
    }

    const result = await db.query(
          `UPDATE invoices
           SET amt=$1, paid=$2, paid_date=$3
           WHERE id=$4
           RETURNING id, comp_code, amt, paid, add_date, paid_date`,
        [amt, paid, paidDate, id]);

    return res.json({"invoice": result.rows[0]});
  }

  catch (err) {
    return next(err);
  }

});

router.delete("/:id", async function (req, res, next) {
  try {
    let id = req.params.id;

    const result = await db.query(
          `DELETE FROM invoices
           WHERE id = $1
           RETURNING id`,
        [id]);

    if (result.rows.length === 0) {
      throw new ExpressError(`No such invoice: ${id}`, 404);
    }

    return res.json({"status": "deleted"});
  }

  catch (err) {
    return next(err);
  }
});

module.exports = router;