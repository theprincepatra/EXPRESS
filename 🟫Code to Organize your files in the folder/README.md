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


## GLANCE->
```bash

BEFORE RUNNING:
.
├── d1.doc
├── d2.doc
├── d3.doc
├── g1.gif
├── g2.gif
├── g3.gif
├── i1.img
├── i2.img
├── i3.img
├── i4.img
├── i5.img
├── je.jpeg
├── m1.mp4
├── m2.mp4
├── p1.png
├── tpp.txt
└── pd.pdf


AFTER RUNNING:
.
├── docs
│   ├── d1.doc
│   ├── d2.doc
│   ├── d3.doc
│   ├── tpp.txt
│   └── pd.pdf
│
├── images
│   ├── g1.gif
│   ├── g2.gif
│   ├── g3.gif
│   ├── i1.img
│   ├── i2.img
│   ├── i3.img
│   ├── i4.img
│   ├── i5.img
│   ├── je.jpeg
│   └── p1.png
│
├── videos
│   ├── m1.mp4
│   └── m2.mp4
│
├── others
│   └── (empty for now)
│
└── no_extension
    └── (empty for now)
