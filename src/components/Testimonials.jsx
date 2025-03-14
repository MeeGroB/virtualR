import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What People are saying</h2>

        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index)=> (
                <div key={index} className=" px-4 py-2 w-full sm:w-1/2 lg:w-1/3">
                    <div className="bg-neutral-800 rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p>{testimonial.text}</p>

                        <div className="flex items-start mt-8">
                            <img src={testimonial.image} alt={testimonial.user} 
                            className="h-12 w-12 mr-6 rounded-full border border-neutral-300"/>

                            <div>
                                <h6>{testimonial.user}</h6>
                                <span className="text-sm italic font-normal text-neutral-600">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>

                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials