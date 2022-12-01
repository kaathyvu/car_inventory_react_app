let token = `39134f18e0f6e7d9f3cb104020cd1ff1182820fac8a238ae`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://intermediate-rift-wallaby.glitch.me/api/dogs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (! response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data:any) => {
        const response = await fetch(`https://intermediate-rift-wallaby.glitch.me/api/dogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (! response.ok) {
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },

    update: async(id:string, data:any) => {
        const response = await fetch(`https://intermediate-rift-wallaby.glitch.me/api/dogs/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://intermediate-rift-wallaby.glitch.me/api/dogs/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
    }
}