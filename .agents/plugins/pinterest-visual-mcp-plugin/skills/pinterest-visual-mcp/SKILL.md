---
name: pinterest-visual-mcp
description: Integration runbook for Pinterest MCP Server (collactivelabs/pinterest-mcp-server) for visual moodboarding, UI inspiration discovery, and pin curation.
---

# Pinterest Visual Inspiration & MCP Discovery Skill

Skill ini mencakup penggunaan **Pinterest MCP Server (`collactivelabs/pinterest-mcp-server`)** untuk melakukan perambahan referensi visual, moodboard estetis, ide tata letak UI/UX, dan kurasi inspirasi visual untuk Next.js frontend.

---

## 1. Integrasi Pinterest MCP Server
* **Package Name:** `@iflow-mcp/collactivelabs-pinterest-mcp-server`
* **Fitur Utama MCP Server:**
  * `search_pins`: Mencari pin gambar berdasarkan kata kunci tren (misal: *dark mode dashboard UI*, *glassmorphism web design*, *minimalist pop modern*).
  * `get_board_pins`: Mengambil pin dari papan inspirasi terkurasi.
  * `create_pin`: Menyimpan referensi visual baru ke papan proyek.

---

## 2. Penggunaan Referensi Visual untuk UI/UX Next.js
* **Moodboard Generation:** Gunakan Pinterest MCP untuk menarik contoh tata letak kartu, kombinasi warna neon-dark, dan elemen tipografi pop-modern.
* **Layout Mapping:** Terjemahkan inspirasi visual dari Pinterest menjadi komponen Tailwind CSS & Material Design 3 (M3).
