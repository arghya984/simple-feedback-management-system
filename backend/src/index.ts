import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 2000;

app.use(cors());

app.use(express.json());

const feedbacks: { name: string; feedback: string }[] = [{name: "arghya", feedback:"ok"}, {name: "arfda", feedback:"odfsfsdk"}, {name: "arerrya", feedback:"oksdseq"} ];

app.get('/feedback', (req, res) => {
  res.json(feedbacks);
});

app.post('/feedback', (req, res) => {
  const { name, feedback } = req.body;
  if (name && feedback) {
    feedbacks.push({ name, feedback });
    res.status(201).json({ message: 'Feedback submitted' });
  } else {
    res.status(400).json({ message: 'Name and feedback are required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
