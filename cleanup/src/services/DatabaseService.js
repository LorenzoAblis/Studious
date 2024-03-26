import { db } from "/firebaseConfig";
import { ref, onValue, set, update, remove } from "firebase/database";

class DatabaseService {
  fetchData = (location) => {
    return new Promise((resolve, reject) => {
      const dataRef = ref(db, location);
      onValue(
        dataRef,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            resolve(data);
          } else {
            reject("No data available");
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  addData = async (location, title, data) => {
    try {
      if (data && title && location) {
        await set(ref(db, location), data);
      } else {
        console.log("Invaild data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  editData = async (location, title, data) => {
    try {
      if (data && title && location) {
        await update(ref(db, `${location}/${title}`), data);
      } else {
        console.log("Invaild data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  deleteData = async (location, title) => {
    try {
      if (location && title) {
        await remove(ref(db, `${location}/${title}`));
      } else {
        console.log("Invaild data");
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export default DatabaseService;
