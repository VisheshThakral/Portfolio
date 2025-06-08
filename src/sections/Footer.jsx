const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/VisheshThakral",
      src: "/assets/github.svg",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/vishesh-thakral/",
      src: "/assets/linkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/the_vishesh_thakral/",
      src: "/assets/instagram.svg",
      alt: "Instagram",
    },
  ];

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {socialLinks.map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-10 h-10 rounded-full shadow-md hover:scale-105 transition-transform"
          >
            <img src={src} alt={alt} className="w-1/2 h-1/2" />
          </a>
        ))}
      </div>

      <p className="text-white-500">
        © {getCurrentYear()} Vishesh Thakral. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
