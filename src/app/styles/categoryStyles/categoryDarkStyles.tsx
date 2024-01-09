const darkStyles: { [key: string]: string } = {
  container:
    'flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-white',
  header:
    'text-3xl font-extrabold text-gray-200 my-8 sm:my-10 md:my-12 lg:mt-16',

  searchBarContainer: 'w-full max-w-lg mx-auto mb-6',
  searchBar:
    'w-full p-3 mb-6 border rounded-lg border-gray-700 bg-gray-800 shadow-sm',
  addButton:
    'mb-6 px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300',
  quoteBlock:
    'mt-4 p-6 bg-gray-800 rounded-lg shadow-md w-full max-w-lg mx-auto transition-transform transform hover:scale-105 hover:shadow-lg',
  quoteText: 'text-md text-gray-300',
  languageLabel: 'font-medium text-blue-400',
  buttonsContainer: 'flex space-x-4 mt-4',
  button:
    'px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 transform rounded-md focus:outline-none',
  deleteButton: 'bg-red-600 hover:bg-red-700 focus:bg-red-500',
  editButton: 'bg-blue-600 hover:bg-blue-700 focus:bg-blue-500',
  scrollButton:
    'fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 z-10 px-4 py-2 text-sm font-semibold text-white rounded-md focus:outline-none focus:ring focus:border-blue-300',
}

export default darkStyles
