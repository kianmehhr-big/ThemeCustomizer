# 🎨 Custom Website Color Theme – Chrome Extension

A simple and powerful Chrome extension that lets you change the color theme of any website to your favorite color.

---

## ✨ Features

- 🎨 Change website background and primary colors
- 💾 Saves selected color automatically
- 🖱️ Simple and clean user interface

---

## 📸 Screenshots

Add your screenshots inside a `/screenshots` folder and link them like this:

```markdown
![Preview 1](screenshots/preview1.png)
![Preview 2](screenshots/preview2.png)
```

---

## 🚀 Installation (Developer Mode)

1. Download the realese fi

2. Open Google Chrome and go to:

```
chrome://extensions/
```

3. Enable **Developer Mode** (top right corner)

4. Click **Load unpacked**

5. Select the extension folder

6. Done ✅

---

## 🛠️ How It Works

The extension injects custom CSS into the active tab using Chrome's scripting API and applies the selected color dynamically.

It uses:

- `manifest.json`
- Content Scripts
- Chrome Storage API
- Scripting API

---

## 📂 Project Structure

```
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── styles.css
└── icons/
```

---

## 🔐 Permissions

- `activeTab` – Modify current page
- `storage` – Save selected color
- `scripting` – Inject CSS dynamically

---

## 🎯 Use Cases

- Personalize website themes
- Reduce eye strain
- Improve accessibility
- Create a custom dark mode

---

## 📌 Future Improvements

- Save color per website
- Add preset themes
- Add gradient support
- Toggle enable/disable button

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

MIT License