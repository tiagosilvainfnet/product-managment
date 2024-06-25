import { get, getDatabase, ref, set } from "firebase/database";

const db = getDatabase();

const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const saveData = async (table, data) => {
    const id = generateUUID();

    await set(ref(db, `${table}/${id}`), data);
}

const updateData = async (table, data, uid) => {
    await set(ref(db, `${table}/${uid}`), data);    
}

const deleteData = async (table, uid) => {
    await set(ref(db, `${table}/${uid}`), null);
}

const loadData = async (table) => {
    const snapshot = await get(ref(db, table));
    if(snapshot.exists()){
        const data = snapshot.val();
        const keys = Object.keys(data);
        const result = []
        keys.forEach(key => {
            result.push({
                id: key,
                ...data[key]
            });
        });

        return result;
    }
    return null;
}

const getData = async (table, uid) => {
    const snapshot = await get(ref(db, `${table}/${uid}`));
    if(snapshot.exists()){
        return snapshot.val();
    }
    return null;
}

export {
    saveData,
    updateData,
    deleteData,
    loadData,
    getData,
}