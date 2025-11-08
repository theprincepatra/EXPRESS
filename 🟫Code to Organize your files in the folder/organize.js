const fs = require('fs').promises;     // 'fs'->let us read, move ,delte & create files and .promises->import promise based API
const path = require('path');      // for working with file paths

// The folder you want to organize ('.' means current folder)
const TARGET_DIR = '.';  

// Define which extensions go where
const groups = {
  images: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'img'],
  videos: ['mp4', 'mov', 'mkv', 'avi'],
  docs: ['md', 'txt', 'pdf', 'doc', 'docx']
};

// Find which folder to send a file into
function getFolderForExt(ext) {
  if (!ext) return 'no_extension';   // file without extension
  ext = ext.toLowerCase();
  for (const [folder, exts] of Object.entries(groups)) {
    if (exts.includes(ext)) return folder;
  }
  return 'others';  // if extension not in our list
}

// Make folder if it doesn't exist
async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true }); //.mkdir() creates a directory.
}

// Move the file safely
async function moveFile(src, dest) {
  try {
    await fs.rename(src, dest);
  } catch (err) {
    if (err.code === 'EXDEV') {  // if rename fails across drives
      await fs.copyFile(src, dest);
      await fs.unlink(src);
    } else {
      throw err;
    }
  }
}

(async function main() {
  const entries = await fs.readdir(TARGET_DIR, { withFileTypes: true });

  for (const ent of entries) {
    if (!ent.isFile()) continue;  // skip folders
    const name = ent.name;
    const ext = path.extname(name).toLowerCase().slice(1);  // get file extension
    const folder = getFolderForExt(ext);
    const folderPath = path.join(TARGET_DIR, folder);
    const srcPath = path.join(TARGET_DIR, name);
    const destPath = path.join(folderPath, name);

    await ensureDir(folderPath);  // create the folder if needed
    await moveFile(srcPath, destPath);
    console.log(`Moved: ${name} → ${folder}/`);
  }
})();
