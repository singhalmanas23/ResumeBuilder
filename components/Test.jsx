import { User } from "lucide-react";

const testimonials = [
  {
    user: "Alice Johnson",
    company: "Creative Agency",
    text: "This resume builder made it incredibly easy to create a professional resume. The templates are modern and user-friendly, and I landed a job within weeks!",
  },
  {
    user: "Bob Smith",
    company: "Tech Innovators",
    text: "I was impressed with the customization options. The intuitive design helped me craft a resume that truly reflects my skills and experiences.",
  },
  {
    user: "Carol White",
    company: "Marketing Masters",
    text: "The resume builder provided excellent guidance throughout the process. I appreciate the helpful tips and recommendations that made my resume stand out.",
  },
  {
    user: "Daniel Lee",
    company: "Finance Pros",
    text: "An outstanding tool for anyone looking to upgrade their resume. The templates are easy to use and look professional, which helped me secure multiple interviews.",
  },
  {
    user: "Eva Green",
    company: "HealthCare Solutions",
    text: "I highly recommend this resume builder. It’s straightforward, effective, and offers a range of templates that helped me create a standout resume.",
  },
  {
    user: "Frank Miller",
    company: "Legal Advisors",
    text: "The resume builder exceeded my expectations. It was quick to use, and the end result was a polished resume that captured my qualifications perfectly.",
  },
];

const Test = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What Users Are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <div className="w-12 h-12 flex justify-center items-center  text-orange-500 rounded-full border border-neutral-300">
                  <User className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h6 className="text-lg font-semibold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
