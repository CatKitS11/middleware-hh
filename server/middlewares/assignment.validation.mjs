export const assignmentValidation = (req, res, next) => {
  const { title, content, category,email } = req.body;
  if (!title || !content || !category || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }
  const assignmentCategoryList = ["Math", "English" , "Biology"];
  if (!assignmentCategoryList.includes(category)) {
    return res.status(400).json({ message: "Invalid category" });
  }
  if (!(content.length >= 500 && content.length <= 1000)) {
    return res.status(400).json({ message: "Content must be between 500 and 1000 characters" });
  }
  next();
};
