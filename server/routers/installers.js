const { Router } = require("express");
const Installer = require("../models/Installer");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newInstaller = new Installer(request.body);
  newInstaller.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
    Installer.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
    Installer.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
    Installer.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Installer.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        companynameSubmission: body.companynameSubmission,
        addressSubmission: body.addressSubmission,
        citySubmission: body.citySubmission,
        stateSubmission: body.stateSubmission,
        zipcodeSubmission: body.zipcodeSubmission,
        phoneSubmission: body.phoneSubmission,
        emailSubmission: body.mailSubmission,
        webSubmission: body.webSubmission,
        bioSubmission: body.bioSubmission,
        reviewSubmission: body.reviewSubmission,
        otherSubmission: body.otherSubmission,
        yearSubmission: body.yearSubmission,
        objSubmission: body.objSubmission,
        tradeSubmission: body.tradeSubmission,
        insuranceSubmission: body.insuranceSubmission,
        instypeSubmission: body.instypeSubmission,
        licenseSubmission: body.licenseSubmission,
        lictypeSubmission: body.lictypeSubmission,
        professionSubmission: body.professionSubmission
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
  Installer.find(filter, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;