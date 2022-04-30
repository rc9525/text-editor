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
const TodosDb = await openDB('todos', 1);
const tx = jateDb.transaction('todos', 'readwrite');


export const getDb = async () => console.error("getDb not implemented");
const TodosDb = await openDB('jate', 1);
const tx = jateDb.transaction('jate', 'readonly');


initdb();
