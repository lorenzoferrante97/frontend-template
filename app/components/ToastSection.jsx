"use client";

import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";

export default function ToastSection() {
	const toastTypes = {
		message: toast.message,
		success: toast.success,
		error: toast.error,
		warning: toast.warning,
		info: toast.info,
	};

	const handleToast = (type = "message", title, description) => {
		const showToast = toastTypes[type] || toast.message;
		showToast(title, description && { description });
	};

	return (
		<div>
			<Button
				// onClick={handleClick}
				onClick={() =>
					handleToast(
						"message",
						"This is a toast message",
						"This is the message description",
					)
				}
				color="accent"
				variant="default"
				size="default"
			>
				Trigger Toast
			</Button>
		</div>
	);
}
