# 🗂️ File Organizer Script (Node.js)

This Node.js script automatically organizes files in a folder based on their **file extensions**.  
It sorts files into subfolders like `images/`, `videos/`, `docs/`, and more — helping you keep your directories neat and tidy.

---

## 📦 Features
- Automatically categorizes files into folders:
  - `images` → png, jpg, jpeg, gif, webp, img  
  - `videos` → mp4, mov, mkv, avi  
  - `docs` → md, txt, pdf, doc, docx  
- Moves unrecognized extensions to `others/`
- Handles files **without extensions** by placing them in `no_extension/`
- Creates missing folders automatically
- Works with **Promise-based `fs` API**

---

## 🧰 Requirements
- **Node.js** (v14 or newer)

---

## ⚙️ Setup & Usage

1. Clone or copy the script into your desired folder.
2. Open a terminal in that folder.
3. Run the following command:
   ```bash
   node organize.js



BEFORE RUNNING:
project/
├── organize.js
├── photo.png
├── video.mp4
├── notes.txt
├── random.xyz

AFTER RUNNING:
project/
├── organize.js
├── images/
│   └── photo.png
├── videos/
│   └── video.mp4
├── docs/
│   └── notes.txt
├── others/
│   └── random.xyz
