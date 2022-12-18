import {motion} from "framer-motion"
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:msadirov1997@gmail?subject=${formData.subject}&body=${formData.name}. ${formData.message} (${formData.email})`
  };
  
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen relative max-w-7xl flex flex-col md:flex-row items-center justify-evenly mx-auto text-center md:text-left overflow-hidden z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact me</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-3xl font-semibold text-center">I have got just what you need. {" "} <span className="underline decoration-[#F7AB0A]/50">Lets Talk!</span></h4>
        
        <div className="space-y-6">
          <div className="flex items-center justify-center spacae-x-5">
            <PhoneIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-2xl">+998979942528</p>
          </div>

          <div className="flex items-center justify-center spacae-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-2xl">msadirov1997@gmail.com</p>
          </div>

          <div className="flex items-center justify-center spacae-x-5">
            <MapPinIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-2xl">2/118 Str. M. Azimov</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} className="contactInput" type="text" placeholder="Name" />
            <input {...register('email')} className="contactInput" type="email" placeholder="Email" />
          </div>
          <input {...register('subject')} className="contactInput" type="text" placeholder="Subject" />
          <textarea {...register('message')} className="contactInput" placeholder="Message"></textarea>
          <button type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactMe