async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);
  
    try {
      const response = await fetch('http://localhost:5000/authentication/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Login failed!');
      }
  
      const data = await response.json();
      const token = data.token;
  
      if (token) {
        localStorage.setItem('token', token);
        alert("Login successful!");
        // Redirect or perform any other action upon successful login
      } else {
        throw new Error('Token not received. Login failed!');
      }
    } catch (error) {
      console.error(error.message);
      alert("Login failed!");
    }
}
  