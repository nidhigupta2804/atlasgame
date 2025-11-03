import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
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
  const numeric = Math.max(0, Math.min(Number(amount || 0), max));

  const onConfirm = () => {
    if (countryId && numeric > 0) {
      investPoints(countryId, numeric);
      setAmount('');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invest Points {countryName ? `in ${countryName}` : ''}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="text-sm text-gray-600">Available: {max} pts</div>
          <Input
            type="number"
            min={0}
            max={max}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter points to invest"
          />
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={onConfirm} disabled={numeric <= 0}>Invest</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


