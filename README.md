# 📘 Rot-Learn

**Rot-Learn** is a flashcard learning web app that combines scrolling UI, Text-to-Speech (TTS), and spaced repetition mechanics to help users passively study topics while engaging with modern formats like TikTok-style vertical interfaces.

---

## 📂 Folder Structure

app/
├── api/
│ ├── flashcards/ # Flashcard-related endpoints (future)
│ ├── sets/ # Set CRUD endpoints
│ │ ├── [id]/route.ts # GET / PUT individual sets
│ │ ├── create/route.ts # POST create new set
│ │ └── route.ts # GET all sets
│ └── speak/route.ts # POST to generate speech from text (Speechify)
├── create-set/page.tsx # Page to create a new flashcard set
├── sets-client/
│ ├── [id]/page.tsx # Page to edit a flashcard set
│ └── page.tsx # Homepage for browsing flashcard sets
├── page.tsx # Entry point: flashcard scroller

## Setup

Install

```
git clone https://github.com/yourusername/rot-learn.git
cd rot-learn
npm install
```

Make a .env file with this in it, make a speechify api key. For the database, go to Supabase and make a free account and trial database as you see here.
https://www.youtube.com/watch?v=BgifvZIRPPA

```
DATABASE_URL=postgresql://username:password@localhost:5432/yourdb
SPEECHIFY_API_KEY=your_speechify_api_key
```

Migrate Prisma

```
npx prisma migrate dev --name init
npm run dev
```

Now open in the environment it tells you to!
