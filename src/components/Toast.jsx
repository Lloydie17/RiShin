export const Toast = ({ message, type, onClose }) => {
    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

    return (
        <div className={`fixed bottom-5 right-5 z-50 px-4 py-3 text-white rounded shadow-lg ${bgColor}`}>
            <div className="flex items-center justify-between space-x-4">
                <span>{message}</span>
                <button onClick={onClose} className="font-bold">×</button>
            </div>
        </div>
    );
};