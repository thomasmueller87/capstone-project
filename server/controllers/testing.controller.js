import mongoose from 'mongoose';

const deleteTestDatabase = async (req, res) => {
  if (process.env.DB_NAME === 'blubb-app-test') {
    try {
      const collections =
        await mongoose.connection.db.collections();
      collections.forEach(async (collection) => {
        await collection.drop();
      });
      res.json('Collections were pruned');
    } catch (error) {
      res.json(error);
    }
  } else {
    res.json('Nothing to see here. Go back to work!');
  }
};

export { deleteTestDatabase };
