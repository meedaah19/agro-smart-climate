import { useContext, useEffect, useState } from "react";
import Input from "../components/UI/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ModalContext } from "../components/store/ModalContext";
import {createClient} from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fetching, setFetching] = useState(false);
  const modalCtx = useContext(ModalContext);
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  

    useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      const type = params.get("type");

      if (accessToken && refreshToken && type === "recovery") {
        supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
      }
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      setFetching(true);
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("Password reset successful. Please sign in.");
      modalCtx.showModal("signin");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setFetching(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h2 className="text-2xl font-bold">Reset Password</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md p-6 border rounded-md shadow-md"
      >
       

        <div className="relative">
          <Input
            label="New Password"
            id="newPassword"
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button
          type="submit"
          disabled={fetching}
          className="bg-[#FF8E28] text-white font-bold py-2 px-4 rounded-md"
        >
          {fetching ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
