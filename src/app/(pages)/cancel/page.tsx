import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
type Props = {};

export default function page({}: Props) {
  return (
    <main className="w-full min-h-[70vh] text-xl flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
        <div className="text-2xl md:text-4xl flex items-center justify-center">
          <span className="mr-2">
            <CancelIcon color="action" sx={{ fontSize: 44 }} />
          </span>
          Order Completed
        </div>
        <div className="text-lg md:text-xl font-medium">
          Your payment was cancelled. Please try again.
        </div>
      </div>
    </main>
  );
}
