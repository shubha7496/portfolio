import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Shubham Singh Rajput</h1>
        <p className="text-lg mt-2">Java Developer</p>

        {/* Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a href="mailto:rajputshubham7496@gmail.com" aria-label="Email">
            <Mail />
          </a>
          <a href="tel:+917489102883" aria-label="Phone">
            <Phone />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-rajput-connect/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/shubha7496"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="bg-white text-blue-600 px-6 py-2 rounded-2xl font-semibold shadow hover:bg-gray-200 transition"
          >
            📄 Download Resume
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Results-driven Java Developer with hands-on experience in designing
          and implementing microservices, RESTful APIs, and cloud-native
          applications using Java, Spring Boot, and AWS. Skilled in CI/CD,
          containerization, and messaging systems. Strong expertise in database
          optimization, scalable backend development, and delivering
          production-ready enterprise solutions.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white shadow rounded-2xl">
            <b>Languages:</b> Java, SQL
          </div>
          <div className="p-4 bg-white shadow rounded-2xl">
            <b>Frameworks:</b> Spring Boot, Spring MVC, Spring Security,
            Hibernate, JPA
          </div>
          <div className="p-4 bg-white shadow rounded-2xl">
            <b>Databases:</b> MySQL, Redis
          </div>
          <div className="p-4 bg-white shadow rounded-2xl">
            <b>Cloud & DevOps:</b> AWS, Docker, Kubernetes, Jenkins, CI/CD
          </div>
          <div className="p-4 bg-white shadow rounded-2xl">
            <b>Messaging:</b> Kafka, RabbitMQ
          </div>
          <div className="p-4 bg-white shadow rounded-2xl">
            <b>Tools:</b> Git, GitHub, Maven, JUnit, Postman
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="font-bold">
              Java Developer Intern – Appmint Innovation Pvt. Ltd.
            </h3>
            <p className="italic">Remote | Mar 2025 – Jul 2025</p>
            <ul className="list-disc ml-6">
              <li>
                Built 3+ RESTful microservices in Spring Boot for Email
                Automation Tool.
              </li>
              <li>
                Integrated Spring Security with JWT tokens for 1,000+ users.
              </li>
              <li>
                Improved API response time by 30% with Redis caching.
              </li>
              <li>Deployed services on AWS EC2 with Docker.</li>
            </ul>
          </li>

          <li>
            <h3 className="font-bold">
              Java Developer Intern – Quintus Tech Pvt. Ltd.
            </h3>
            <p className="italic">Indore | Jan 2024 – Mar 2024</p>
            <ul className="list-disc ml-6">
              <li>
                Designed Wallet App with fund transfer and bill payment modules.
              </li>
              <li>Collaborated in Agile sprints, achieving 95% on-time delivery.</li>
            </ul>
          </li>

          <li>
            <h3 className="font-bold">
              Java Developer Intern – Arbutus Infotech Pvt. Ltd.
            </h3>
            <p className="italic">Indore | Jan 2023 – Apr 2023</p>
            <ul className="list-disc ml-6">
              <li>
                Developed Login & Registration app with Spring Boot and JWT.
              </li>
              <li>Reduced unauthorized access attempts by 100%.</li>
              <li>
                Participated in code reviews, ensuring 95% compliance with
                standards.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white shadow rounded-2xl">
            <h3 className="font-bold">Wallet App</h3>
            <p>
              Digital wallet with balance tracking, withdrawals, and recharge.
              Built using Spring Boot microservices.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-2xl">
            <h3 className="font-bold">Email Automation Tool</h3>
            <p>
              Bulk email system with Gmail API, email validation, authentication,
              and free trial credits. Deployed on AWS.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-2">
          <li>
            <b>MCA</b> – Medi Caps University, Indore (2021 – 2023) | 7.0 CGPA
          </li>
          <li>
            <b>BCA</b> – R.P.L. College (2018 – 2021) | 72%
          </li>
          <li>
            <b>12th</b> – Saraswati Vidya Mandir, Timarni (2014) | 60%
          </li>
          <li>
            <b>10th</b> – Saraswati Vidya Mandir, Timarni (2012) | 68%
          </li>
        </ul>
      </section>

      {/* Contact */}
      <footer className="bg-blue-600 text-white text-center p-6 mt-8">
        <p>
          📍 Indore | 📞 +91-7489102883 | ✉ rajputshubham7496@gmail.com
        </p>
        <p className="mt-2">© 2025 Shubham Singh Rajput</p>
      </footer>
    </div>
  );
}
