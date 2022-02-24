require

document.forms["input-form"].onsubmit = () => {
    const firstName = document.getElementById("firstName").value
    if (firstName === 'Mike') {
        Rollbar.warning('Mike is almost not valid')
    }
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    alert(`First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Username: ${username}
Password: ${password}`)
}