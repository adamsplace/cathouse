
const parseJSON = r => r.json()

const headers = { 'Content-Type': 'application/json', 
    Accept: 'application/json' }

export const postUsers = body => fetch( '/users', { method: 'POST', headers,
    body } ).then( parseJSON )