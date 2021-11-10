const login = async event => {
	event.preventDefault();

	// idk where this going dude
	const response = await fetch('/auth/login', {
		body: JSON.stringify({
        	email: event.target.email.value,
        	password: event.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
  });
  const successfail = await response.json();
  console.log(successfail);
}

export default login;