import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import Carousel from "../../componentes/carousel/Carousel";

const testimonials = [
  {
    name: "Robson Rezende",
    role: "22/07/2025",
    avatar: "RZ",
    rating: 5,
    text: "Medica muito atenciosa e precisa no meu tratamento, estou me setindo bem melhor",
  },
  {
    name: "Camila mignon",
    role: "22/07/2025",
    avatar: "CM",
    rating: 5,
    text: "Ela foi ótima. Me ajudou muito e enviou a receita para onde precisava",
  },
  {
    name: "Willian",
    role: "24/07/2025",
    avatar: "WI",
    rating: 5,
    text: "Excelente Doutora! Atenciosa e com atendimento humanizado, ouve cada detalhe e indica a intervenção correta.",
  },
  {
    name: "Sara",
    role: "28/09/2025",
    avatar: "SA",
    rating: 5,
    text: "Excelente consulta e excelente médica. Muito paciente, humana e atenciosa.",
  },
  {
    name: "Mateus",
    role: "05/09/2025",
    avatar: "MT",
    rating: 5,
    text: "Otima muito boa atenciosa educada e me trata a mt tempo adoro ela",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="relative ml-10 flex-shrink-0 w-[350px] bg-card border border-blue-100 rounded-2xl p-6 hover:shadow-sm transition-all duration-300 hover:-translate-y-1">
    {/* Quote Icon */}
    <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-light rounded-full flex items-center justify-center">
      <Quote className="w-5 h-5 text-white" fill="currentColor" />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-4 pt-2">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
      ))}
    </div>

    {/* Text */}
    <p className="text-blue-dark/80 mb-6 leading-relaxed">
      "{testimonial.text}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-blue-light/10 flex items-center justify-center">
        <span className="text-blue-light font-semibold">
          {testimonial.avatar}
        </span>
      </div>
      <div>
        <h4 className="font-semibold text-blue-dark">{testimonial.name}</h4>
        <p className="text-sm text-blue-dark/80">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const FeedBack = () => {
  return (
    <section id="depoimento" className="scroll-mt-30 mt-20 pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} //Não repete
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <span className="px-4 py-2 rounded-full bg-blue-baby text-blue-midium mb-4">
              Depoimentos
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} //Não repete
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 mt-10 text-blue-dark">
              O que nossos pacientes dizem
            </h2>
            <p className="text-lg text-blue-dark/80">
              A satisfação dos nossos pacientes é nossa maior conquista
            </p>
          </motion.div>
        </div>
      </div>

      <Carousel align="start" loop={true} classNameChildren="">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Carousel>
    </section>
  );
};

export default FeedBack;
