//quotes/[category]

const styles: { [key: string]: string } = {
  container:
    'flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6',
  header: 'text-3xl font-extrabold text-gray-900 mb-8',
  searchBarContainer: 'w-full max-w-lg mx-auto mb-6', // Container for the search bar
  searchBar:
    'w-full p-3 mb-6 border rounded-lg border-gray-300 bg-white shadow-sm', // Added margin-bottom
  addButton:
    'mb-6 px-6 py-3 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300', // If needed, adjust margin-bottom here as well
  quoteBlock:
    'mt-4 p-6 bg-white rounded-lg shadow-md w-full max-w-lg mx-auto transition-transform transform hover:scale-105 hover:shadow-lg',
  quoteText: 'text-md text-gray-800',
  languageLabel: 'font-medium text-blue-700',
  buttonsContainer: 'flex space-x-4 mt-4', // Updated style for the container holding the buttons
  button:
    'px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 transform rounded-md focus:outline-none', // Base style for the buttons
  deleteButton: 'bg-red-500 hover:bg-red-600 focus:bg-red-400', // Specific style for the delete button
  editButton: 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-400', // Specific style for the edit button
  scrollButton:
    'fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 z-10 px-4 py-2 text-sm font-semibold text-white rounded-md focus:outline-none focus:ring focus:border-blue-300',
}

export default styles
