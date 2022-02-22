type VerifyUserFn = (user: User, sentValues: User) => boolean;
//Structural type
type User = { username: string; password: string };

const VerifyUser: VerifyUserFn = (user, sentValues) => {
  return (
    user.username === sentValues.username &&
    user.password === sentValues.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao2', password: '123456' };
const loggedIn = VerifyUser(bdUser, sentUser);
console.log(loggedIn);
