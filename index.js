const getRecursiveJwt = (n, o) => n > 0 ? getRecursiveJwt(--n, { ...o, o }) : o;
const decode = (token) => JSON.parse(atob(token.split('.')[1]));

console.log(JSON.stringify(getRecursiveJwt(5, { jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGhpYWdvQGZyZWVjb2RlLmNvbS5iciIsIm1lc3NhZ2UiOiJjb25ncmF0dWxhdGlvbnMsIHlvdSBtYWRlIGl0ISJ9.7gjZS83sZhfnbyodFjZIAqUm4HTx_UGJe_EXc_PC0fE' })));
