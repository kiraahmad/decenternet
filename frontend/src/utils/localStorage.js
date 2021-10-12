
export const getLocalStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(`${key}`)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveLocalStorage = (key, value) => {
    try {
        const serializedState = JSON.stringify(value)
        localStorage.setItem(`${key}`, serializedState)
    } catch (err) {
        return undefined
    }
}

export const updateLocalStorage = (key, data) => {
    try {
        const profile = JSON.parse(localStorage.getItem(`${key}`))
        Object.keys(data).forEach((key) => {
            profile[key] = data[key]
        })
        localStorage.setItem(`${key}`, JSON.stringify(profile))
    } catch (err) {
        return undefined
    }
}

export const removeLocalStorage = (key) => {
    return localStorage.removeItem(`${key}`)
}

export const getLocalStorageItem = (key) => {
    return localStorage.getItem(`${key}`)
}

export const getPersistToken = () => {
    const storage = JSON.parse(localStorage.getItem('persist:user')) || null
    const state = storage && storage.auth ? JSON.parse(storage.auth) : null
    return state && state.ui.token ? state.ui.token : undefined
}
