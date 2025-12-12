# Foxglove OpenBridge Extension

This project is a custom **Foxglove Studio Panel Extension** that integrates **OpenBridge Web Components** (Thruster, Topbar) and binds them to simulated vessel sensor data.

---

## 🚀 Features

* Foxglove custom panel named **OpenBridge**
* Integration of OpenBridge Web Components:

- `Azimuth Thruster`
- `Topbar`

* Simulated vessel data (thruster angle, RPM)
* Clean React + TypeScript structure
* Installable in Foxglove Studio
* Follows recommended best practices

---

## 📦 Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Start local install

```bash
npm run local-install
```

### 3. Fix lint and format code

```bash
npm run lint
```

Foxglove Studio will detect the extension automatically.

---

## 🏗 Build Extension

To generate the foxglove package:

```bash
npm run build
```

The output file will appear in:

```
dist/extension.js
```

---

## 🧩 Installing in Foxglove Studio

1. Open **Foxglove Studio**
2. Go to:
   **Settings → Extensions → Install Extension**
3. Select the generated `.foxe` file
4. Add a new panel
   → Choose **OpenBridge**

---

## 📡 Simulated Data

The panel uses a custom hook:
`useSimulatedData()`

Values update every 300ms:

* Thruster angle: oscillating between ±40°
* RPM: 800–1000 dynamically

These mimic real-time telemetry.

---

## 🛠 Code Structure

```
src/
  panels/OpenBridgePanel     → Main panel UI
  components/
    AzimuthThruster
    Topbar
  hooks/
    useSimulatedData.ts          → Vessel data simulation
    useFoxGloveStimulated.ts     → subscribe to topics and data simulation
  declarations.ts                → declare open-bridge web components   
  MainPanel.tsx                  → Create root for panel
  index.ts                       → Entry point and register panel
```

---

## 📝 Good Practices Followed

* Strong TypeScript typing
* Small, reusable React components
* Clean separation of concerns
* Comments where needed
* Simple and readable layout
* Web Components imported only once (globally)

---

## 🧾 License

MIT License

---

## 👤 Author

Harshil Gorasia
2025
