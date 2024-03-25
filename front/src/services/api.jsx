const URL_API = 'http://localhost:3001/api/v1/user';

export const  signInUser = async (formData) => {

    try {
        const res = await fetch(`${URL_API}/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
            const data = await res.json();
            return data
    } catch (error) {
        throw new Error(error.message)
    }
}


export const profileUser = async (token) => {
    try {
        const response = await fetch(`${URL_API}/profile`,
        {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        })
    const dataFetch = await response.json()
    return dataFetch
    } catch (error) {
        throw new Error(error.message)
        
    }
}


export const updateUser = async (username, token) => {
    try {
        const response = await fetch(`${URL_API}/user`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify({ userName: username })
        })

    const data = await response.json()
    return data
    } catch (error) {
        throw new Error(error.message)
    }
}