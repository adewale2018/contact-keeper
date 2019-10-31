const express = require("express");
const router = express.Router();

//@route   GET api/contacts
//@desc    GET all contacts
//@access  Private

router.get("/", (req, res) => {
  res.send("Getting all contacts..");
});

//@route    POST api/contacts
//@desc     Add new contact
//@access  Private

router.post("/", (req, res) => {
  res.send("Adding a new contact..");
});

//@route   PUT api/contacts/:id
//@desc    Update contact
//@access  Private

router.put("/:id", (req, res) => {
  res.send("updating a contact..");
});

//@route   DELETE api/contacts/:id
//@desc    Delete a contact
//@access  Private

router.delete("/:id", (req, res) => {
  res.send("Deleting a contact..");
});

module.exports = router;
