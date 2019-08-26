export const setLocalStorage = (name, obj) => {
    const serializedState = JSON.stringify(obj);
    sessionStorage.setItem(name, serializedState);
};
export const getLocalStorage = (name) => {
    try {
        const serializedState = sessionStorage.getItem(name);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};