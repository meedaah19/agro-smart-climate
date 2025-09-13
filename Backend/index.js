import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const FRONTEND_URL = process.env.VITE_FRONTEND_URL || "http://localhost:5173";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,

);
const supabaseAnon = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

app.post("/register", async (req, res) => {
  const { name, email, password} = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email" });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters",
    });
  }

  try {
  const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, 
    });

  if (error) return res.status(400).json({ success: false, message: error.message });

  const user = data.user;

  const { error: insertError } = await supabase.from("profiles").insert([
    {
      id: user.id,
      name,
    },
  ]);

  if (insertError) {
  return res.status(400).json({
    success: false,
    message: insertError.message
  });
}

  return res.json({ 
    success: true,
    message: "Registration successful!", 
    user  
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res
    .status(500)
    .json({ success: false, message: "Internal server error" });
  }
  
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    return res.json({
      success: true,
      message: "Login successful",
      user: data.user,
      token: data.session.access_token,
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }

});

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      // redirectTo: `${FRONTEND_URL}/reset-password`, 
    });

    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    return res.json({
      success: true,
      message: "Password reset email sent. Please check your inbox.",
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.post('/kyc', async (req, res) => {
  const { language, voice, role, tools, location, crops } = req.body;

  if (!language || !voice || !role || !tools || !location || !crops) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "Missing auth header" });
    }

    const token = authHeader.split(" ")[1];

    const { data: { user }, error: verifyError } = await supabaseAnon.auth.getUser(token);

    if (verifyError || !user) {
      return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }

    console.log("Authenticated user:", user.id);

    const { data: kycData, error: insertError } = await supabase
      .from('kycforms')
      .insert([{
        user_id: user.id,
        language,
        voice,
        role,
        tools,
        location,
        crops
      }]);

    if (insertError) {
      return res.status(400).json({ success: false, message: insertError.message });
    }

    return res.json({
      success: true,
      message: "KYC form submitted successfully",
      data: kycData
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});



app.listen(5000, () => console.log("Server running on port 5000"));