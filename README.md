<!-- README for Timestamper -->

# 🌟 Timestamper

> A lightweight PWA to convert Unix timestamps into human-readable dates and display the current timestamp in real-time.

[![GitHub Stars](https://img.shields.io/github/stars/mCodex/react-timestamper?style=social)](https://github.com/mCodex/react-timestamper/stargazers)
[![License](https://img.shields.io/github/license/mCodex/react-timestamper)](LICENSE)

> 📦 Built with Next.js · TypeScript · Tailwind CSS & DaisyUI · PWA-ready

> 🔗 **Live Demo:** https://mCodex.github.io/react-timestamper

---

## 🚀 Features

- ⏱️ **Current Timestamp**: Real-time Unix timestamp in seconds & milliseconds.
- 🔄 **Timestamp Converter**: Convert 10-digit or 13-digit timestamps to UTC & local dates + relative time.
- 📋 **Copy to Clipboard**: One-click copy icons for all outputs.
- 🎨 **Theming**: Dark & light mode via DaisyUI themes.
- 📱 **PWA**: Installable on mobile & desktop, offline support via service worker.

---

## 💻 Installation & Development

```bash
git clone https://github.com/mCodex/react-timestamper.git
cd react-timestamper
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📦 Usage

1. **Current Timestamp**: Click the copy icon to copy current timestamp (sec/ms).
2. **Convert Timestamp**: Enter a Unix timestamp and click **Convert**.
3. View UTC, Local date & relative time, then copy with the copy icon.

---

## 🎨 Customization & Theming

- Tweak theme by changing `data-theme` in `app/layout.tsx`.
- Add global overrides in `globals.css` or extend DaisyUI in `tailwind.config.js`.

---

## 🤝 Contributing

We welcome contributions! Follow the steps:
1. Fork the repo
2. Create a branch (`git checkout -b feature/foo`)
3. Commit changes (`git commit -m 'feat: add foo'`)
4. Push to branch (`git push origin feature/foo`)
5. Open a Pull Request

---

## 📄 License

MIT © [mCodex](https://github.com/mCodex)
