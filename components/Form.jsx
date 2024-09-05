import { useState } from 'react';

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Resume submitted successfully!');
  };

  return (
    <div className="text-center mt-20">
      <button
        onClick={handleShowForm}
        className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-3 px-6 rounded-md"
      >
        Get Started
      </button>

      {showForm && (
        <div className="mt-10 p-6 bg-neutral-900 rounded-md border border-neutral-800 max-w-lg mx-auto">
          <h2 className="text-2xl mb-4">Resume Submission Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-neutral-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-neutral-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full p-2 border border-neutral-800 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-1">
                Professional Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows="4"
                required
                className="w-full p-2 border border-neutral-800 rounded-md"
              ></textarea>
            </div>
            <div>
              <label htmlFor="education" className="block text-sm font-medium mb-1">
                Education
              </label>
              <textarea
                id="education"
                name="education"
                rows="4"
                required
                className="w-full p-2 border border-neutral-800 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-3 px-6 rounded-md"
            >
              Submit Resume
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
