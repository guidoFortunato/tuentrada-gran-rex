import { Toast } from "flowbite-react";

export const ToastError = ({ text = "Error" }) => {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
        <HiX className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{text}</div>
      <Toast.Toggle />
    </Toast>
  );
};
