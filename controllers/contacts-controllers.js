const { HttpError } = require("../helpers");
const contacts = require("../models/contacts");
const { ctrlWrapper } = require("../utils");

const getAllContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);

  if (!result) {
    throw HttpError(404, `Not found contact with ${contactId}`);
  }

  return res.json(result);
};

const addMyContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, `contact with ${contactId} not found`);
  }

  res.json({
    message: "Contact deleted",
  });
};

const updateTheContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, `contact with ${contactId} not found`);
  }
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  addMyContact: ctrlWrapper(addMyContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateTheContact: ctrlWrapper(updateTheContact),
};
