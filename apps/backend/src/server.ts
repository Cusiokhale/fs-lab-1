import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import organizationRoutes from "./routes/organization.route";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Backend server is running" });
});

app.use("/organization", organizationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});