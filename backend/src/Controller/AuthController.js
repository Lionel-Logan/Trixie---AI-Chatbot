require("dotenv").config();
const  supabase  = require("../supabaseClient");

const googleAuth = async (req, res) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
  
      if (error) {
        return res.status(400).json({ error: error.message });
      }
  
      // ✅ Send URL as JSON instead of redirecting
      res.json({ url: data.url });
  
    } catch (err) {
      console.error("Google Auth Error:", err);
      res.status(500).json({ message: "Server Error" });
    }
  };
  

module.exports = { googleAuth };
