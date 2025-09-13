const API_BASE_URL = "http://localhost:5000";
//import.meta.env.VITE_API_URL || 

export async function registerUser(name, email, password) {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    console.log(data);
    
    
    if (!response.ok) {
        alert(data.message || 'Registration failed,');
        return data;
    };
    alert(data.message);
    console.log(data.user);
    return data;
}

export async function loginUser(email, password) {
    const response = await fetch(`${API_BASE_URL}/login`, {
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
        return data;
    }

    alert(data.message);
    console.log("User:", data.user);
    console.log("Token:", data.token);

    localStorage.setItem("access_token", data.token);
    return data;

}

export async function sendPasswordResetEmail (email){
    const response = await fetch(`${API_BASE_URL}/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    alert(data.message);

    if(!response.ok) {
        alert(data.message || "Request failed");
        return data;
    }

    return data;

};
