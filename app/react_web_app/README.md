# Data viz & AI chat demo

- **Run dev:** `npm run dev`
- **Build:** `npm run build`
- **Preview build:** `npm run preview`

To enable real AI responses in the chat, set `VITE_CHAT_API_URL` to your chat endpoint (e.g. Streamlit/Flask/FastAPI). The app sends `POST` with `{ "message": "user text" }` and expects a JSON body with a reply in `reply`, `response`, `text`, or `message`. Create a `.env` in this directory:

```
VITE_CHAT_API_URL=http://localhost:8000/chat
```
