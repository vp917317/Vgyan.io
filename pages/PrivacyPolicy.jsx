import React from "react";
import '../styles/index.css'
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const PrivacyPolicy = () => {
  return (
    <>
    <Head>
        {/* Set the page title and meta description for SEO */}
        <title>Privacy policy - Vgyan.io </title>
        <meta name="description" content="privacy policy of vgyan.io" />
        {/* Add other SEO-related meta tags here */}
         {/* JSON-LD structured data for Article */}
         <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": "Privacy Policy- vgyan.io",
              "description": "Privacy policy of vgyan.io",
              "publisher": {
                "@type": "Organization",
                "name": "vgyan.io", 
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://imgtr.ee/images/2023/09/23/0ab9e1d72544a7035e90772385108976.jpeg" 
                }
              }
            }
          `}
        </script>

      </Head>
      <Nav bgColor="purple" />
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-black p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Privacy Policy for vgyan.io
          </h1>

          <h2 className="text-3xl font-semibold">1. Introduction</h2>
          <p className="mb-4 text-white text-2xl">
            Welcome to vgyan.io, owned by VenusRam (referred to as "we," "us,"
            or "our"). At vgyan.io, we are committed to protecting your privacy.
            This Privacy Policy is designed to help you understand how we
            collect, use, and safeguard your personal information. By accessing
            or using vgyan.io, you consent to the practices described in this
            Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p className="mb-4 text-white text-2xl">
            <strong>Personal Information:</strong> We may collect personal
            information such as your name and email address when you voluntarily
            provide it to us, for example, when you use our contact form or send
            us an email.
          </p>
          <p className="mb-4 text-white text-2xl">
            <strong>Log Data:</strong> We collect information that your browser
            sends whenever you visit our website ("Log Data"). This Log Data may
            include information such as your browser type, browser version, the
            pages of our website that you visit, the time and date of your
            visit, and other statistics.
          </p>

          <h2 className="text-3xl font-semibold">3. Use of Information</h2>
          <p className="mb-4 text-2xl text-white">
            {" "}
            When registering on our site, as appropriate, you may be asked to
            enter your: name, e-mail address, phone number, or other information
            about you.
          </p>
          <p className="mb-4 text-white text-2xl">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc ml-8 mb-4 text-2xl">
            <li>
              We do not store any data unless you provide us your information in
              form of contacting use .
            </li>
            <li>To respond to your inquiries and provide support.</li>
            <li>
              To analyze and improve the content and user experience of our
              website.
            </li>
            <li>
              To send periodic emails regarding updates or other information
              related to our services, with your prior consent.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold">4. Cookies and Ads</h2>
          <p className="mb-4 text-white text-2xl">
            <strong>Cookies:</strong> We may use essential cookies that are
            necessary for the functioning of our website. These cookies do not
            collect personal information.
          </p>
          <p className="mb-4 text-white text-2xl">
            <strong>Third-Party Ads:</strong> We may display third-party
            advertisements on vgyan.io, which may use their own tracking
            technologies. Please refer to the privacy policies of these
            third-party ad providers for more information about their practices.
          </p>

          <h2 className="text-3xl font-semibold">5. Data Sharing</h2>
          <p className="mb-4 text-white text-2xl">
            We do not share or sell your personal information to third parties .
          </p>
          <p className="mb-4 text-white text-2xl">
            {" "}
            We will never give, sell, rent or borrow your information to anyone.
            We respect your privacy and your trust. We will therefore never
            give, sell, rent or borrow your information to anyone without your
            express permission.
            <br></br>
            We will never have direct access to your payment methods without
            your consent. We do not collect or store any of your payment
            information. We do not collect any payments through our website.
          </p>

          <h2 className="text-3xl font-semibold">6. Security</h2>
          <p className="mb-4 text-white text-2xl">
            We implement an SSL (secure socket layer) that protects your
            information.
            <br></br>We take reasonable measures to protect your personal
            information from unauthorized access or disclosure.
          </p>

          <h2 className="text-3xl font-semibold">
            7. Changes to this Privacy Policy
          </h2>
          <p className="mb-4 text-white text-2xl">
            We reserve the right to modify this Privacy Policy at any time.
            Changes and clarifications will take effect immediately upon their
            posting on the website. If we make material changes to this policy,
            we will notify you here that it has been updated, so that you are
            aware of what information we collect, how we use it, and under what
            circumstances, if any, we use and/or disclose it.
          </p>

          <h2 className="text-3xl font-semibold">8. Contact Us</h2>
          <p className="mb-4 text-white text-2xl">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at contact@vgyan.io.
          </p>

          <p className="mb-2 text-white text-2xl">Effective Date: 2023-09-23</p>
          <p className="mb-4 text-white text-2xl">Last Updated: 2023-09-23</p>
          <p className="text-lg text-blue-800">Thank you for using vgyan.io!</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
