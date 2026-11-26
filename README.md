# Bacride UI Suite

Standalone UI projects for the **Bacride Ride Booking & Parcel Delivery Platform**, organized into three independent folders for parallel team development and straightforward React Native (Android/iOS) conversion.

## Folders

| Folder | Module | Port | Structure |
| :--- | :--- | :--- | :--- |
| `./admin-panel` | Web Admin Dashboard & Operations | `5173` | `src/pages/`, `src/components/`, `src/data/`, `src/theme/` |
| `./customer-app` | Customer Mobile UI (6 Screens) | `5174` | `src/screens/`, `src/navigation/`, `src/components/`, `src/theme/` |
| `./rider-app` | Rider / Partner Mobile UI (6 Screens) | `5175` | `src/screens/`, `src/navigation/`, `src/components/`, `src/theme/` |

## Running Locally

```bash
# Admin Panel
cd admin-panel && npm install && npm run dev

# Customer App
cd customer-app && npm install && npm run dev

# Rider App
cd rider-app && npm install && npm run dev
```

## React Native Conversion Notes
- `customer-app/` and `rider-app/` isolate every screen under `src/screens/`, navigation routes under `src/navigation/types.ts`, and design tokens under `src/theme/tokens.ts`.
- All icons use `@phosphor-icons/react`, whose names and props (`size`, `color`, `weight`) map directly to `phosphor-react-native` alongside `react-native-svg` for custom vehicle and map artwork.
