export const getDeviceType = () => {
  const isMac = /(Mac)/i.test(navigator.userAgent);
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

  console.log(navigator.userAgent);

  if (isMac) {
    return 'mac';
  }

  if (isMobile) {
    return 'mobile';
  }

  return 'windows';
};
