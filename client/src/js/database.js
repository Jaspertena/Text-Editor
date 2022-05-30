import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
const JATE = await openDB("jate" ,1 )
const transcript = JATE.transaction("jate", "readwrite")
const store = transcript.objectStore("jate")
const { id, value } = content
const request = store.put({
  id, value 
})
const response = await request;
console.log(response)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const JATE = await openDB("jate" ,1 )
  const transcript = JATE.transaction("jate", "readwrite")
  const store = transcript.objectStore("jate")
  const request = store.get(1)
  const response = await request;
  console.log(response)  
}
initdb();