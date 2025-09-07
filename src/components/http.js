export async function Register(name, email, password, cpassword) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("cpassword", cpassword);

  const response = await fetch("https://agrosmart-api.onrender.com/api/auth/register", {
    method: "POST",
    body: formData,
  });

  const resText = await response.text();
    console.log("Response Text:", resText);

    if (!response.ok) {
    throw new Error(resText || "Failed to sign up");
    }

    return resText;
  
}


export async function login(email, password) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const response = await fetch("https://agrosmart-api.onrender.com/api/auth/login", {
    method: "POST",
    body: formData,
  });

  const resText = await response.text();
    console.log("Response Text:", resText);

    if (!response.ok) {
    throw new Error(resText || "Failed to sign in");
    }

    return resText;
  
}

    


export async function forgotPassword(email) {
  const formData = new FormData();
  formData.append("email", email);

  const response = await fetch("https://agrosmart-api.onrender.com/api/forgot-password", {
    method: 'POST',
    body: formData,
  });

  const resText = await response.text();
      console.log("Response Text:", resText);


  if (!response.ok) {
    throw new Error(resText || 'Something went wrong. If you already requested a reset, check your email.');
  } 
  alert("Password reset link sent! Check your email.");
  return resText;
}

export async function resetPassword(token, newPassword) {
  const formData = new FormData();
  formData.append("newPassword", newPassword);
  formData.append("token", token);

  const response = await fetch("https://agrosmart-api.onrender.com/api/reset-password", {
    method: 'POST',
    body: formData,
  });

  const resText = await response.text();
      console.log("Response Text:", resText);


  if (!response.ok) {
    throw new Error(resText || 'Invalid or expired token');
  }
  
  return resText;
}

  


export async function KycUpdate(token, newPassword) {
  const response = await fetch("https://agrosmart-api.onrender.com/api/user/kyc-update", {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      token,
      newPassword
    }).toString(),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Failed to reset password');
  }

  console.log("Response Data:", resData);
  return resData;
}