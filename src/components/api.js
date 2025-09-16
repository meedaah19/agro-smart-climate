import {supabase} from "../supabaseClient";

const API_BASE_URL = "http://localhost:5000" || import.meta.env.VITE_API_URL;

export function isTokenValid() {
  const token = localStorage.getItem("access_token");
  const expiry = localStorage.getItem("tokenExpiry");
  return token && expiry && Date.now() < expiry;
}

export async function registerUser(name, email, password) {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
    localStorage.setItem("tokenExpiry", Date.now() + 60 * 60 * 1000);
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

export async function KYCSubmission( language, voice, role, tools, location, crops) {
    const token = localStorage.getItem("access_token");
    console.log(localStorage.getItem("access_token"));


    const response = await fetch(`${API_BASE_URL}/kyc`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            language, 
            voice, 
            role, 
            tools, 
            location, 
            crops 
        })
    });     

    const data = await response.json();
    console.log(data);

    if(!response.ok) {
        alert(data.message || "KYC submission failed");
        return data;
    }       

    alert(data.message);
    return data;

}

export async function UserProfile() {
  const token = localStorage.getItem("access_token");

  if (!token) {
    alert("No access token found. Please log in again.");
    return { success: false, message: "No token" };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log("Profile response:", data);

    if (!response.ok) {
      alert(data.message || "Fetching profile failed");
    }

    return data;
  } catch (err) {
    console.error("Error fetching profile:", err);
    return { success: false, message: err.message };
  }
}

export async function kycData(){
  const token = localStorage.getItem("access_token");

  if (!token) {
    alert("No access token found. Please log in again.");
    return { success: false, message: "No token" };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/kycdata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log("KYC response:", data);

    if (!response.ok) {
      alert(data.message || "Fetching KYC failed");
    }

    return data;
  } catch (err) {
    console.error("Error fetching KYC:", err);
    return { success: false, message: err.message };
  }
}

export async function updateUser(profile, kyc, profileImageBase64, fileType) {
  const token = localStorage.getItem("access_token"); 
  const response = await fetch(`${API_BASE_URL}/update-user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ profile, kyc, profileImageBase64, fileType }),
  });

  const data = await response.json();
  console.log("Update response:", data);

  if (!response.ok) {
    throw new Error(data.message || "Updating user failed");
  }

  return data; 
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);

  localStorage.removeItem("access_token");

  return { success: true, message: "Logged out successfully" };
}

// api.js

export async function fetchWeather() {
  const token = localStorage.getItem("access_token");
  const response = await fetch(`${API_BASE_URL}/weather`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Weather fetch failed");
  return data; 
}

