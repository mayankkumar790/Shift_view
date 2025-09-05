// components/ShiftCard.tsx
import React from 'react';

interface Shift {
    start?: string;
    end?: string;
    duration?: number;
    pay?: number;
    status?: 'absent' | 'approved_leave' | 'approved_leave_all_day';
}

const ShiftCard: React.FC<{ shift: Shift }> = ({ shift }) => {
    let color = 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200';
    let content = null;

    if (shift.status === 'absent') {
        color = 'font-semibold bg-red-400 text-white dark:bg-red-900 dark:text-red-200';
        content = <div className='flex flex-col gap-1'>
            <p className='font-semibold text-white'>{shift.start}-{shift.end}</p>
            <p className="font-thin">Absent</p>
        </div>;
    } else if (shift.status === 'approved_leave_all_day') {
        color = 'font-semibold bg-amber-100 text-gray-500 dark:bg-amber-900 dark:text-amber-200';
        content = <p>Approved Leave ○ All Day</p>;
    } else if (shift.status === 'approved_leave') {
        color = 'font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
        content = <p>Approved Leave</p>;
    } else {
        content = (
            <>
                <p className='font-semibold text-black'>{shift.start}-{shift.end}</p>
                <p>○ {shift.duration} h ${shift.pay}</p>
            </>
        );
    }
    return (
        <div className={`rounded-lg p-2 text-xs min-h-[60px] ${color}`}>
            {content}
        </div>
    );
};

export default ShiftCard;