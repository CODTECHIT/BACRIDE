import React from 'react';
import { BOOKING_MIX, REVENUE_SERIES } from '../data/mockData';

export const RevenueChart: React.FC<{ period: 'Daily' | 'Weekly' | 'Monthly' }> = ({ period }) => {
  const data = REVENUE_SERIES[period];
  const maxVal = 40;
  const w = 420;
  const h = 135;
  const padL = 34;
  const padR = 14;
  const padT = 14;
  const padB = 22;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const pts = data.map((d, i) => {
    const x = padL + (i / Math.max(1, data.length - 1)) * plotW;
    const y = padT + plotH - (d.value / maxVal) * plotH;
    return { x, y, ...d };
  });

  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L ${pts[pts.length - 1].x.toFixed(1)} ${(padT + plotH).toFixed(1)} L ${pts[0].x.toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-36" aria-label="Revenue trend chart">
      <defs>
        <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[0, 10, 20, 30, 40].map((tick) => {
        const y = padT + plotH - (tick / maxVal) * plotH;
        return (
          <g key={tick}>
            <line x1={padL} y1={y} x2={w - padR} y2={y} stroke="#F3F4F6" strokeWidth="1" />
            <text x={padL - 6} y={y + 3} textAnchor="end" fontSize="9" fill="#9CA3AF">
              ₹{tick === 0 ? '0' : `${tick}L`}
            </text>
          </g>
        );
      })}
      <path d={areaPath} fill="url(#revGrad)" />
      <path d={linePath} fill="none" stroke="#ffae2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="3.5" fill="#ffae2e" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x={p.x} y={h - 6} textAnchor="middle" fontSize="9" fill="#6B7280">
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export const BookingsDonut: React.FC = () => {
  const radius = 44;
  const circ = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex items-center gap-5">
      <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90" aria-label="Bookings by type chart">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="#F3F4F6" strokeWidth="16" />
          {BOOKING_MIX.map((seg) => {
            const dash = (seg.pct / 100) * circ;
            const currentOffset = offset;
            offset += dash;
            return (
              <circle
                key={seg.label}
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth="16"
                strokeDasharray={`${dash} ${circ - dash}`}
                strokeDashoffset={-currentOffset}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-extrabold text-gray-900 leading-tight">56,720</span>
          <span className="text-[10px] text-gray-500">Bookings</span>
        </div>
      </div>

      <div className="flex-1 space-y-2 text-xs">
        {BOOKING_MIX.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-gray-700 font-medium truncate">{item.label}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0 tabular-nums">
              <span className="font-bold text-gray-900">{item.count}</span>
              <span className="text-gray-400 text-[11px] w-11 text-right">({item.pct}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
