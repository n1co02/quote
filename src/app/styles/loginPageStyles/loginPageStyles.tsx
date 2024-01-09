const lightStyles: { [key: string]: string } = {
  container:
    'flex flex-col lg:flex-row items-center justify-center h-screen bg-[#fbfcfc]',
  imageContainer: 'lg:w-1/2 w-full h-96 lg:h-full relative order-2 lg:order-1',
  formContainer:
    'lg:w-1/4 w-5/6 max-w-lg p-8 bg-[#fbfcfc] rounded-lg shadow-2xl z-10 order-1 lg:order-2 lg:mx-4 m-4',
  title: 'mb-6 text-3xl font-bold text-center text-gray-700',
  form: 'space-y-6',
  input:
    'w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline',
  button:
    'w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline',
  toggleButton:
    'absolute top-4 right-4 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300',
}

export default lightStyles
