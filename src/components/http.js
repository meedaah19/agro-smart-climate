async function registerUser(name, email, password) {
    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    console.log(data);
    
    if (!response.ok) {
        alert(data.message || 'Registration failed');
        return;
    };
    alert(data.message);
    console.log(data.user);
}

async function loginUser(email, password) {
    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })        
    });

    const data = await response.json();
    console.log(data);

    if(!response.ok) {
        alert(data.message || "Login failed");
        return;
    }

    alert(data.message);
    console.log("User:", data.user);
    console.log("Token:", data.token);

    localStorage.setItem("access_token", data.token);
}
