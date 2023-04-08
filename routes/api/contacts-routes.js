const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const { validateBody } = require("../../utils");
const schemas = require("../../schemas/contacts");
const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addMyContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", ctrl.updateTheContact);

module.exports = router;
