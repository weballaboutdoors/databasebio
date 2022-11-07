const { Router } = require("express");
const Kansas = require("../models/Kansas");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newKansas = new Kansas(request.body);
  newKansas.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Kansas.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Kansas.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Kansas.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Kansas.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        companyName: body.company,
        address: body.street,
        city: body.city,
        state: body.state,
        zipcode: body.zip,
        phone: body.fone,
        email: body.mail,
        profession: body.profession
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

router.get("/:atrib/:value", (request, response) => {
  let filter = {};
  filter[request.params.atrib] = request.params.value;
  Kansas.find(filter, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;