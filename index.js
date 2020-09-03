export const getRecursiveJwt = (n, o) => n > 0 ? getJwt(--n, { o, jwt: '123123' }) : o;
export const decode = (token) => JSON.parse(atob(token.split('.')[1]));
export const encode = (token) => JSON.parse(atob(token.split('.')[1]));
