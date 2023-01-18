const { Router } = require("express");
const Update = require("../models/Update");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newUpdate = new Update(request.body);
  newUpdate.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
    Update.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
    Update.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
    Update.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Update.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        companynameUpdate: body.companynameUpdate,
        addressUpdate: body.addressUpdate,
        cityUpdate: body.cityUpdate,
        stateUpdate: body.stateUpdate,
        zipcodeUpdate: body.zipcodeUpdate,
        phoneUpdate: body.phoneUpdate,
        emailUpdate: body.mailUpdate,
        webUpdate: body.webUpdate,
        bioUpdate: body.bioUpdate,
        reviewUpdate: body.reviewUpdate,
        professionUpdate: body.professionUpdate
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
  Update.find(filter, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;