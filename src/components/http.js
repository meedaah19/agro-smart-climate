export async function signupUpdate(name, email, password, cpassword) {
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


export async function signinUpdate(email, password) {
  const response = await fetch("https://agrosmart-api.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email,
      password,
    }).toString(),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Failed to signin');
  }

  console.log("Response Data:", resData);
  return resData;
}

    


export async function forgotPassword(email) {
  const response = await fetch("https://agrosmart-api.onrender.com/api/forgot-password", {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email,
    }).toString(),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || 'Failed, try again later');
  }

  console.log("Response Data:", resData);
  return resData;
}

export async function resetPassword(token, newPassword) {
  const response = await fetch("https://agrosmart-api.onrender.com/api/reset-password", {
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