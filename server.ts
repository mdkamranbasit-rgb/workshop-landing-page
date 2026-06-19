import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

// Safe active memory dataset array for enquiries
const inMemoryEnquiries: any[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middlewares
  app.use(express.json());
  app.use(cors());

  // POST /api/enquiry
  app.post("/api/enquiry", async (req, res) => {
    try {
      const { name, email, phone } = req.body;

      // 1. Server-side parameters presence validations
      if (!name || typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({ 
          success: false, 
          error: "Full name is a required field." 
        });
      }
      if (!email || typeof email !== "string" || email.trim() === "") {
        return res.status(400).json({ 
          success: false, 
          error: "Email address is a required field." 
        });
      }
      
      // Email format regex validation
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          error: "Please provide a valid email address format (e.g., student@example.com)." 
        });
      }

      if (!phone || typeof phone !== "string" || phone.trim() === "") {
        return res.status(400).json({ 
          success: false, 
          error: "Contact phone number is a required field." 
        });
      }

      // Safe phone format validation (minimum 10 digits/characters for standard international/national formats)
      const sanitizedPhone = phone.replace(/[^0-9+()-\s]/g, "");
      if (sanitizedPhone.length < 8) {
        return res.status(400).json({ 
          success: false, 
          error: "Please enter a valid phone number (at least 8 digits)." 
        });
      }

      const enquiryData = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: sanitizedPhone.trim(),
        createdAt: new Date()
      };

      // Add to robust local cache
      inMemoryEnquiries.push(enquiryData);
      console.log(`[Enquiry Server] Stored in local high-speed cache (Total records: ${inMemoryEnquiries.length}): ${enquiryData.email}`);

      return res.status(201).json({
        success: true,
        message: "Registration enquiry successfully processed! Our workshop admissions team will contact you shortly.",
        data: enquiryData,
        persistence: "In-Memory Session Cache"
      });

    } catch (err: any) {
      console.error("❌ [Enquiry Server] Internal Server Exception:", err);
      return res.status(500).json({ 
        success: false, 
        error: "An unexpected error occurred while processing your enquiry. Please attempt to submit again." 
      });
    }
  });

  // GET /api/enquiries - Admin/Developer utility to trace enquiries in live preview
  app.get("/api/enquiries", async (req, res) => {
    try {
      return res.status(200).json({
        success: true,
        count: inMemoryEnquiries.length,
        source: "In-Memory dynamic list",
        data: inMemoryEnquiries
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // Integrates Vite SPA server dynamically
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serving production transpiled React index output
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 [Server Worker] Running at http://localhost:${PORT}`);
  });
}

startServer();
