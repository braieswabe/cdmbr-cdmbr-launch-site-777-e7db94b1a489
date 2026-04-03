"use client";

import Script from "next/script";

export function HubSpotTracking() {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_KEY;
  if (!portalId) return null;

  return (
    <Script
      id="hubspot-script"
      async
      src={`//js.hs-scripts.com/${portalId}.js`}
    />
  );
}