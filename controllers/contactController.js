//business logic methods goes here
const getContacts = (req,resp) => {
    resp.status(200).json({"message": "Get all contacts"});
};

const createContact = (req,resp) => {
    console.log("request body is:", req.body);
    resp.status(201).json({"message": "Create Contact"});
};

const getContact = (req,resp) => {
    resp.status(200).json({"message": `Get contact for ${req.params.id}`});
};

const updateContact = (req,resp) => {
    resp.status(200).json({"message": `Update contact for ${req.params.id}`});
};

const deleteContact = (req,resp) => {
    resp.status(200).json({"message": `Delete contact for ${req.params.id}`});
};

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};