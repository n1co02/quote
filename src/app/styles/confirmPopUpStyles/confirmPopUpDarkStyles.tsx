const darkStyles: { [key: string]: string } = {
  popupContainer: `
      fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50
    `,
  popup: `
      w-full max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg
      sm:w-3/4 md:w-1/2 lg:w-1/3
    `,
  title: `
      text-lg font-bold mb-4 text-white
    `,
  buttonContainer: `
      flex flex-col sm:flex-row justify-start mt-4 space-y-4 sm:space-y-0 sm:space-x-4
    `,
  button: `
      px-4 py-2 w-full sm:w-auto rounded font-bold focus:outline-none focus:ring transition
    `,
  noButton: `
      bg-red-600 text-white hover:bg-red-700
    `,
  confirmButton: `
      bg-green-600 text-white hover:bg-green-700
    `,
}

export default darkStyles
