const useGetDeviceMode = () => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

  return isDarkMode.matches
}

export default useGetDeviceMode
