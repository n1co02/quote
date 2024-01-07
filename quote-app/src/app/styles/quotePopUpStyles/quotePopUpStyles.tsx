const lightStyles: { [key: string]: string } = {
  popupContainer:
    'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50',
  popup: 'w-full max-w-md p-6 bg-white rounded-lg shadow-lg',
  button:
    'px-6 py-3 text-sm font-semibold rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-colors duration-150 transform',
  closeButton: 'bg-red-500 text-white hover:bg-red-600 mr-2',
  addButton: 'bg-green-500 text-white hover:bg-green-600 ml-2',
  editButton:
    'bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 px-6 py-3 text-sm font-semibold rounded-md transition-colors duration-150 transform',
  buttonContainer: 'flex justify-center mt-4 space-x-2',
  inputField:
    'w-full p-3 mb-4 border rounded-lg border-gray-300 bg-white shadow-sm',
  dropdown:
    'w-full p-3 mb-4 border rounded-lg border-gray-300 bg-white shadow-sm text-transform uppercase text-sm font-semibold appearance-none transition-colors duration-150 ease-in-out hover:border-blue-500 focus:outline-none focus:border-blue-500 responsive',
}

export default lightStyles
