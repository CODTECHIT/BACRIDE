/**
 * Design tokens shared across Bacride UI (portable directly to React Native StyleSheet / NativeWind).
 */
export const BacrideTheme = {
  colors: {
    primary: '#FBBF24',
    primaryDeep: '#F59E0B',
    primarySoft: '#FFFBEB',
    headerTop: '#FCD34D',
    headerMid: '#FDE68A',
    headerBottom: '#FEF9C3',
    darkSurface: '#14171D',
    darkCard: '#161920',
    background: '#F9FAFB',
    surface: '#FFFFFF',
    border: '#E5E7EB',
    textPrimary: '#111827',
    textSecondary: '#4B5563',
    textMuted: '#9CA3AF',
    success: '#16A34A',
    successSoft: '#ECFDF5',
    danger: '#DC2626',
    dangerSoft: '#FEF2F2',
  },
  radii: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    pill: 9999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
} as const;
