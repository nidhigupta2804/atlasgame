import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useStore } from '../../state/store';

interface InvestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  countryId: string | null;
  countryName: string | null;
}

export default function InvestModal({ open, onOpenChange, countryId, countryName }: InvestModalProps) {
  const { state, investPoints } = useStore();
  const currentUser = state.currentUserId ? state.users.find(u => u.id === state.currentUserId) : null;
  const [amount, setAmount] = useState<string>('');

  const max = currentUser ? currentUser.totalPoints : 0;
  const parsed = Number(amount || 0);
  const numeric = Number.isFinite(parsed) ? Math.max(0, Math.min(parsed, max)) : 0;

  useEffect(() => {
    if (open) {
      setAmount(String(max));
    }
  }, [open, max, countryId]);

  const onConfirm = () => {
    if (countryId && numeric > 0) {
      investPoints(countryId, numeric);
      setAmount('');
      onOpenChange(false);
    }
  };

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 3000 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} onClick={() => onOpenChange(false)} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(560px, calc(100% - 2rem))',
          background: '#111827',
          color: '#ffffff',
          borderRadius: 12,
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          padding: '20px',
          border: '1px solid #1f2937',
        }}
        role="dialog"
        aria-modal="true"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontWeight: 700 }}>Invest Points {countryName ? `in ${countryName}` : ''}</div>
          <button onClick={() => onOpenChange(false)} style={{ color: '#ffffff' }}>✕</button>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          <div className="text-sm" style={{ color: '#e5e7eb' }}>Available: {max} pts</div>
          <Input
            type="number"
            min={0}
            max={max}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter points to invest"
            className="bg-white text-gray-900"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={onConfirm} disabled={numeric <= 0}>Invest</Button>
        </div>
      </div>
    </div>
  );
}


