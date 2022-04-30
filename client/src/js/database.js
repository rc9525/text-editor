import { openDB } from "idb";



const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
     
    },
  });

export const putDb = async (content) => console.error("putDb not implemented");

export const getDb = async () => console.error("getDb not implemented");

initdb();
