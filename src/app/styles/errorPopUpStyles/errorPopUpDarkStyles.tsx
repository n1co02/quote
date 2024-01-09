const darkStyles: { [key: string]: string } = {
  popupContainer: `
      fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50
    `,
  popup: `
      w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg
    `,
  closeButton: `
      px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700
      focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50
      transition duration-150 ease-in-out
    `,
}

export default darkStyles
