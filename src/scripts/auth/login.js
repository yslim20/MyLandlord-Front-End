const login = async (event) => {
	event.preventDefault();

	// console.log(event.target);
	// console.log(event.target.Email.value, event.target.Password.value)

	// idk where this going dude
	const response = await fetch('http://localhost:3080/auth/login', {
		body: JSON.stringify({
        	email: event.target.Email.value,
        	password: event.target.Password.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
	  // mode: 'no-cors'
  }).then(r => console.log(r.text()))
  .catch(e => console.log(e));
  // const successfail = await response.json();
  // console.log(successfail);
}

export default login;
