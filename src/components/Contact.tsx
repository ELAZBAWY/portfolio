import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_356bk4c", // من EmailJS
        "template_xgo0b3j", // من EmailJS
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Q9lklhtuuGo19cGWd" // من EmailJS
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-black transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Let's Work Together
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-yellow-500/30 group-hover:border-gray-900 dark:group-hover:border-yellow-400 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-6 h-6 text-gray-700 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:john@example.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-yellow-400 transition-colors"
                  >
                    ahmed.elazbawy200@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-yellow-500/30 group-hover:border-gray-900 dark:group-hover:border-yellow-400 transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-6 h-6 text-gray-700 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-yellow-400 transition-colors"
                  >
                    +20 155 598 9244
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-yellow-500/30 group-hover:border-gray-900 dark:group-hover:border-yellow-400 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-gray-700 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Egypt ElGharbia Tanta
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-yellow-400 dark:to-yellow-600 rounded-2xl blur-2xl opacity-20"></div>
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-yellow-500/20 shadow-2xl space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-yellow-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-yellow-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-yellow-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-yellow-600 text-white dark:text-black font-medium rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
