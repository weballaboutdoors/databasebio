const { Router } = require("express");
const Customer = require("../models/Customer");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newCustomer = new Customer(request.body);
  newCustomer.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});


// Get (read) all records from the collection
router.get("/", (request, response) => {
  Customer.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
    Customer.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
    Customer.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Customer.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        customer: body.customer,
        company: body.company,
        email: body.email,
        feedback: body.feedback
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
  Customer.find(filter, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
