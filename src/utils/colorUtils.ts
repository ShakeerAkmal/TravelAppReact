 const hexToRgba = (hex: string, opacity: number): string => {
    const sanitizedHex = hex.replace("#", "");
    const bigint = parseInt(sanitizedHex, 16);
  
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  const colors = {
    Primary: "#001F54", //Sunset Orange
    Accent: "#FFD700", //Golden Yellow
    Neutral: "#708090", // Warm Beige
    Background: "#F5F5F5", // Light Peach
    Text: "#000000", // Dark Brown
  };

 export   {colors, hexToRgba};