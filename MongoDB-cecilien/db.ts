import mongoose from 'mongoose';

// Remplacez les valeurs entre < > par vos informations
const connectionString =
'mongodb+srv://axelhvk:jFKBiVfH8AGBN1ui@axel.wvn8mqi.mongodb.net/?retryWrites=true&w=majority';

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connecté à MongoDB Atlas');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB :', error);
    process.exit(1); // Quitte l'application en cas d'erreur de connexion
  }
};
