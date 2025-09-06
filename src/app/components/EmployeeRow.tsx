// components/EmployeeRow.tsx
import React from 'react';
import ShiftCard from './ShiftCard';

interface Shift {
    start?: string;
    end?: string;
    duration?: number;
    pay?: number;
    status?: 'absent' | 'approved_leave' | 'approved_leave_all_day';
}

interface Employee {
    avatar: any;
    name: any;
    role: any;
    weeklyPay: number;
    shifts: any; // Array of shifts per day
}

const EmployeeRow: React.FC<{ employee: Employee }> = ({ employee }) => {
    return (
        <div className="flex border-b rounded-xl border-gray-200 bg-[#FAF8FC] dark:border-gray-700">
            <div className='p-1'>
                <div className="w-64 h-full flex-shrink-0 rounded-xl flex p-4 space-x-4 bg-white dark:bg-gray-900">
                    <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-800">
                        {employee.avatar || employee.name.charAt(0)}
                    </div>
                    <div>
                        <p className="font-semibold">{employee.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{employee.role}</p>
                        <p className="text-sm">${employee.weeklyPay}</p>
                    </div>
                </div>
            </div>

            {employee.shifts.map((dayShifts: any[], index: React.Key | null | undefined) => (
                <div key={index} className="flex-1 border-1 border-[#EDE9F5] min-h-[80px] p-1 flex justify-center">
                    <div className="w-full flex flex-col space-y-1">
                        {dayShifts.map((shift, sIndex) => (
                            <ShiftCard key={sIndex} shift={shift} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EmployeeRow;