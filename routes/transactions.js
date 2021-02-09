const express = require("express");
const trsRouter = express.Router();
const { transactions, summaryLog } = require("../mock/trsMock");

trsRouter.get("/", async (req, res) => {
  try {
    return res.status(200).json({ transactions, summaryLog });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: "server error" }] });
  }
});

module.exports = trsRouter;
