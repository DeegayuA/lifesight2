import {CheckIcon, EnvelopeIcon, EnvelopeOpenIcon} from '@heroicons/react/24/outline';

export default function EmailCard({email, onOpenStatusChange}: any) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
                <div onClick={() => onOpenStatusChange(email)} className="cursor-pointer">
                    {email.open ? (
                        <EnvelopeOpenIcon className="h-6 w-6 text-gray-500" style={{ strokeWidth: 2 }}/>
                    ) : (
                        <EnvelopeIcon className="h-6 w-6  text-blue-500" style={{ strokeWidth: 3 }}/>
                    )}
                </div>
                <a href={`mailto:${email?.email}`} className="font-semibold text-blue-700 overflow-x-auto">{email.email}</a>
                {email.read && (<CheckIcon className="h-6 w-6 text-green-600"  style={{ strokeWidth: 5 }}/>)}
            </div>
            <div className="text-gray-600 text-sm">{email.message}</div>
            <div className="mt-2">
                <a href={`tel:${email?.phone}`} className="text-[16px] text-gray-300">{email?.phone}</a>
                <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>{email.firstName + " " + email.lastName}</span>
                    <span>{new Date(email.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}
