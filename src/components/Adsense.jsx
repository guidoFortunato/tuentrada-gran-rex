// AdSense.js
import React, { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    // Código de anuncio de AdSense
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{display:"block"}}
      data-ad-format="fluid"
      data-ad-layout-key="-h6+2+12-4l+5y"
      data-ad-client="ca-pub-3241865431125040"
      data-ad-slot="8133563126"
    ></ins>
  );
};

export default AdSense;
