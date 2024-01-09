const darkStyles: { [key: string]: string } = {
  container:
    'flex flex-col lg:flex-row items-center justify-center h-screen bg-[#1c1c1e]',
  imageContainer: 'lg:w-1/2 w-full h-96 lg:h-full relative order-2 lg:order-1',
  formContainer:
    'lg:w-1/4 w-5/6 max-w-lg p-8 bg-[#2c2c2e] rounded-lg shadow-lg z-10 order-1 lg:order-2 lg:mx-4 m-4',
  title: 'mb-6 text-3xl font-bold text-center text-gray-300',
  form: 'space-y-6',
  input:
    'w-full px-3 py-2 leading-tight text-gray-300 border border-gray-600 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline bg-[#3c3c3e]',
  button:
    'w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline',
  toggleButton:
    'absolute top-4 right-4 px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-lg cursor-pointer hover:bg-gray-500',
}
export default darkStyles
