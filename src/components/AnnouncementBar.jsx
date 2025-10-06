import React from 'react';

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-gray-100 text-sm sm:text-base h-10">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-10 flex items-center justify-center text-center">
        <span className="flex flex-wrap items-center justify-center gap-1">
        
          <span className="ml-1 sm:ml-2 text-xs sm:text-sm md:text-base">
              🔔 This site is a product showcase only. To order, please contact us via WhatsApp or email for bulk / export enquiries.
          </span>
        </span>
      </div>
    </div>
  );
}
