import { v4 as uuidv4 } from "uuid";
import mime from "mime-types";
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

  app.get("/", (req, res) => {
  res.send("🚀 Agro Smart Climate backend is running!");
});

  app.get("/weather", async (req, res) => {
 
  try {
     const authHeader = req.headers.authorization;
  if (!authHeader) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

  const token = authHeader.split(" ")[1];

  const { data: { user }, error } = await supabase.auth.getUser(token);

  const { data: kyc } = await supabase
      .from("kycforms")
      .select("location")
      .eq("user_id", user.id)
      .single();

    const apiKey = process.env.OPENWEATHER_KEY;
    const locationInput = (req.query.city || kyc?.location || "").trim();
    if (!locationInput) return res.status(400).json({ message: "No location provided" });

    const latLonRegex = /^\s*-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?\s*$/;
    let lat, lon, displayName;

    if (latLonRegex.test(locationInput)) {
      [lat, lon] = locationInput.split(",").map(s => s.trim());
      displayName = `${lat},${lon}`;
    } else {
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(locationInput)}&limit=1&appid=${apiKey}`
      );
      const geoJson = await geoRes.json();
      if (!geoJson[0]) return res.status(400).json({ message: "Could not resolve location" });
      lat = geoJson[0].lat;
      lon = geoJson[0].lon;
      displayName = `${geoJson[0].name}, ${geoJson[0].country}`;
    }

    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const current = await currentRes.json();

    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const forecast = await forecastRes.json();

    const dailyMap = {};
    forecast.list.forEach(f => {
      const dateKey = new Date(f.dt * 1000).toISOString().split("T")[0]; // "YYYY-MM-DD"

      if (!dailyMap[dateKey]) {
        dailyMap[dateKey] = {
          min: f.main.temp,
          max: f.main.temp,
          description: f.weather[0].description,
          dt: f.dt
        };
      } else {
        dailyMap[dateKey].min = Math.min(dailyMap[dateKey].min, f.main.temp);
        dailyMap[dateKey].max = Math.max(dailyMap[dateKey].max, f.main.temp);
      }
    });

    const daily = Object.values(dailyMap).slice(0, 7).map(f => ({
      day: new Date(f.dt * 1000).toLocaleDateString("en-US", { weekday: "short" }),
      min: f.min,
      max: f.max,
      description: f.description,
    }));

    const normalized = {
      temp: current?.main?.temp ?? null,
      city: displayName || current?.name || null,
      country: current?.sys?.country ?? null,
      description: current?.weather?.[0]?.description ?? null,
      humidity: current?.main?.humidity ?? null,
      wind: current?.wind?.speed ?? null,
      precipitation: current?.rain?.["1h"] ?? 0,

      hourly: Array.isArray(forecast?.list)
        ? forecast.list.slice(0, 6).map(f => ({
            time: new Date(f.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            temp: f.main.temp,
          }))
        : [],

      daily,
    };

    res.json(normalized);
  } catch (err) {
    console.error("Weather API error:", err);
    res.status(500).json({ message: err.message });
  }
});

app.get("/profile", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ success: false, message: "Unauthorized, user is logged out. Pls log in again" });
    }

    
    const { data: profile, error: dbError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id) 
      .single();

    if (dbError) {
      return res.status(400).json({ success: false, message: dbError.message });
    }

    return res.json({ 
      success: true, 
      profile: {...profile, email: user.email}, 
      message: "Profile fetched successfully" });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.get("/kycdata", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ success: false, message: "Unauthorized, user is logged out. Pls log in again" });
    }

    
    const { data, error: dbError } = await supabase
      .from("kycforms")
      .select("*")
      .eq("user_id", user.id) 
      .single();

    if (dbError) {
      return res.status(400).json({ success: false, message: dbError.message });
    }

    return res.json({ 
      success: true, 
      kyc: data, 
      message: "KYC fetched successfully" });
      
  } catch (err) {
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

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

app.patch("/update-user", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized, user is logged out. Pls log in again" });
  }

  const { profile, kyc, profileImageBase64, fileType } = req.body;

  try {
    let imageUrl = null;

    if (profileImageBase64 && fileType) {
      const buffer = Buffer.from(profileImageBase64, "base64");
      const extension = mime.extension(fileType); // detect extension from MIME
      const fileName = `${user.id}/${uuidv4()}.${extension}`;

    const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(fileName, buffer, {
          contentType: fileType,
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("avatars").getPublicUrl(fileName);
      imageUrl = data.publicUrl;
    }

    if (profile || imageUrl) {
      const updates = { ...profile };
      delete updates.email;
      
      if (imageUrl) updates.profile_pic = imageUrl;

      const { error: profileError } = await supabase
        .from("profiles")
        .update(updates)
        .eq("id", user.id);

      if (profileError) throw profileError;
    }


    if (kyc) {
      const { error: kycError } = await supabase
        .from("kycforms")
        .update(kyc)
        .eq("user_id", user.id); 

      if (kycError) throw kycError;
    }

    res.json({
      success: true,
      message: "Profile and KYC updated successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



app.listen(5000, () => console.log("Server running on port 5000"));