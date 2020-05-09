const functions = require("firebase-functions");
const admin = require("firebase-admin");
const algoliasearch = require("algoliasearch");

admin.initializeApp(functions.config().firebase);

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;

const ALGOLIA_INDEX_NAME = "jobs";
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.getAllJobs = functions.https.onRequest(async (request, response) => {
  const snapshot = await firestore.collection("jobs").get();
  const jobs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  response.json({ jobs });
});

// exports.sanitizeContent = functions.firestore
//   .document("jobs/{jobId}")
//   .onWrite(async (change) => {
//     if (!change.after.exists) return;

//     const { content, sanitized } = change.after.data();

//     if (content && !sanitized) {
//       return change.after.ref.update({
//         content: content.replace(/CoffeeScript/g, "********"),
//         sanitized: true,
//       });
//     }

//     return null;
//   });

// Update the search index every time a job is added
exports.onJobCreated = functions.firestore
  .document("jobs/{jobId}")
  .onCreate((snapshot, context) => {
    // Get the job document
    const job = snapshot.data();

    // Add an 'objectID' field which Algolia requires
    job.objectID = context.params.jobId;

    // Write to the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(job);
  });

exports.incrementApplicationCount = functions.firestore
  .document("jobs/{jobId}/applications/{applicationId}")
  .onCreate(async (snapshot, context) => {
    const { jobId } = context.params;
    const jobRef = firestore.doc(`jobs/${jobId}`);

    const applications = await jobRef.get().then((doc) => {
      return doc.data().applications;
    });

    return jobRef.update({ applications: applications + 1 });
  });
