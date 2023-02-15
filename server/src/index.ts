import express from "express";
import cors from "cors";
import colors from "colors";
import jwt from "jsonwebtoken";
import { sample_foods, sample_tags, sample_users } from "./data";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

// Gets the sample_foods array object.
app.get("/api/foods", (req, res) => {
  res.send(sample_foods);
});

// Gets some of the objects in the sample_foods array by searchTerm.
app.get("/api/foods/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const foods = sample_foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(foods);
});

// Gets the tags array object.
app.get("/api/foods/tags", (req, res) => {
  res.send(sample_tags);
});

// Gets some of the objects in the sample_foods array by tag.
app.get("/api/foods/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const foods = sample_foods.filter((food) => food.tags?.includes(tagName));
  res.send(foods);
});

// Gets one object in the sample_foods array by its id.
app.get("/api/foods/:foodId", (req, res) => {
  const foodId = req.params.foodId;
  const food = sample_foods.find((food) => food.id === foodId);
  res.send(food);
});

// Logs in a user.
app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body;

  const user = sample_users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) res.send(generateTokenResponse(user));
  else res.status(400).send("Email or password is not valid");
});

// Creates a user's token.
const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "SecretKey",
    {
      expiresIn: "30d",
    }
  );

  user.token = token;
  return user;
};

app.listen(port, () => {
  console.log(colors.black.bgCyan.italic(`Server started on port ${port}`));
});
