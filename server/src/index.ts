import express from "express";
import cors from "cors";
import colors from "colors";
import { sample_foods, sample_tags } from "./data";

const app = express();

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

const port = 5000;

app.listen(port, () => {
  console.log(colors.black.bgCyan.italic(`Server started on port ${port}`));
});
