import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function EmailCard({ email }: any) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                <span className="font-semibold text-blue-700 overflow-scroll">{email.email}</span>
            </div>
            <div className="text-gray-600 text-sm">{email.message}</div>
            <div className="mt-2">
                <span className="text-[16px] text-gray-300">{email?.phone}</span>
                <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>{email.firstName + " " + email.lastName}</span>
                    <span>{new Date(email.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}
