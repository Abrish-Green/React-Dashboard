export default function AuthHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      return { Authorization: `${user.type} ` + user.token };
    } else {
      return {};
    }
  }