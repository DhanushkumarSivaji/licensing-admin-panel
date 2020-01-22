/* eslint-disable no-fallthrough */

function validation(name, value) {
  let usernameRegex = /^(?![_.])(?!.*[_.]{2})[a-zA-Z._]+(?<![_.])$/;
  let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  var passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  switch (name) {
    case `username`:
      if (!value) {
        return "username is required";
      }
      if (usernameRegex.test(value)) {
        return null;
      } else if (usernameRegex.test(value) === false) {
        return "Username is not valid";
      }
      break;
    case `email`:
      if (!value) {
        return "email is required";
      }
      if (emailRegex.test(value) === false) {
        return "Enter a valid email";
      } else if (emailRegex.test(value)) {
        return null;
      }
      break;
    case "pass1":
      if (!value) {
        return "password is required";
      }
      if (passRegex.test(value) === false) {
        return "password must contain atleast 8 characters with one special character, one number, one uppercase and one lowercase.";
      } else {
        return null;
      }
    default:
      return;
  }
}
export default validation;
