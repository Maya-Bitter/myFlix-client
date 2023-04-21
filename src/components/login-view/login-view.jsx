import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
onst [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
// this prevents the default behavior of the form which is to reload the entire page
event.preventDefault();

const data = {
  access: username,
  secret: password
};

fetch("https://m-flix.herokuapp.com/users", {
method: "POST",
body: JSON.stringify(data)
}).then((response) => {
if (response.ok) {
  onLoggedIn(username);
} else {
  alert("Login failed");
}
});
};
return (
<form onSubmit={handleSubmit}>
<label>
  Username:
  <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
    minLength="3"
  />
</label>
<label>
  Password:
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
</label>
<button type="submit">Submit</button>
</form>
);
};
