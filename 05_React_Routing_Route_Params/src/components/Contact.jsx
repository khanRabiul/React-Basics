const Contact = () => {
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full border border-gray-300 rounded p-2" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  