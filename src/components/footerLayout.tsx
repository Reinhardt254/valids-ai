export function FooterLayout() {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full h-full">
      <div className="absolute top-0 right-0 w-[100vw] z-[1000] separator"></div>
      <section className="flex flex-row items-start justify-between w-[90%] h-full max-w-[1200px] pt-20 gap-20 pb-10 max-sm:px-4 max-sm:py-4 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-10">
        <div className="flex flex-col items-start justify-start w-full max-sm:items-center max-sm:justify-center">
            <img className="object-contain w-full h-auto max-sm:w-1/2" src="/images/footerlogo2.png" alt="logo" />
            <h3 className="font-bold text-white text-md">Futuristic AI & Technology</h3>
            <p className="w-2/3 pt-2 text-sm text-white max-sm:justify-center max-sm:items-center max-sm:text-center">Validleads is your premier destination for groundbreaking AI and technology solutions.</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full gap-20 links max-sm:flex-col max-sm:gap-10 max-sm:justify-center max-sm:items-center">
          <div className="flex flex-col items-start justify-start gap-2 col max-sm:items-center max-sm:justify-center">
            <h2 className="font-bold text-white">Company</h2>
            <ul className="flex flex-col items-start justify-start gap-2 max-sm:justify-center max-sm:items-center">
              <li>
                <a className="text-white" href="#">About Us</a>
              </li>
              <li>
                <a className="text-white" href="#">Blog</a>
              </li>
              <li>
                <a className="text-white" href="#">Investors Relators</a>
              </li>
              <li>
                <a className="text-white" href="#">Sustainability</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 col max-sm:items-center max-sm:justify-center">
            <h2 className="font-bold text-white">Support</h2>
            <ul className="flex flex-col items-start justify-start gap-2 max-sm:justify-center max-sm:items-center">
              <li>
                <a className="text-white" href="#">HelpCenter</a>
              </li>
              <li>
                <a className="text-white" href="#">Contact Us</a>
              </li>
              <li>
                <a className="text-white" href="#">FAQs</a>
              </li>
              <li>
                <a className="text-white" href="#">Service Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-4 subscribe max-sm:items-center max-sm:justify-center">
          <div className="flex flex-col items-start justify-start gap-2 subscribe-form max-sm:items-center max-sm:justify-center">
            <h2 className="font-bold text-white">Join Our Newsletter</h2>
            <p className="text-white">Your Email</p>
            <form className="flex flex-row items-center justify-center gap-4 max-sm:w-2/3">
              <input className="text-white rounded-2xl bg-[#131313] px-5 py-2 " type="email" placeholder="Email" />
              <button className="h-auto px-5 py-2 text-white hero-btn">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-row items-center justify-center socials">
            <div className="social-icon"><img src="/images/dribbble.png" alt="dribbble" /></div>
            <div className="social-icon"><img src="/images/behance.png" alt="facebook" /></div>
            <div className="social-icon"><img src="/images/instagram.png" alt="instagram" /></div>
            <div className="social-icon"><img src="/images/twitter.png" alt="twitter" /></div>
          </div>
        </div>
      </section>
      <br />
      <div className="separator w-[90%] max-w-[1200px] max-sm:my-2"></div>
      <br />
      <section className="flex flex-row items-center justify-between w-[90%] h-full max-w-[1200px] pb-16 max-sm:px-4 max-sm:py-4 max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <p className="text-white">Built by - Progmatric IT Solutions</p>
        <div className="flex flex-row items-center justify-center gap-5 max-sm:flex-col max-sm:gap-2 max-sm:pt-3">
         <div className="flex flex-row items-center justify-center gap-2"><img className="object-bottom w-6 h-6 mt-1" src="/images/email.png" alt="email" /><p className="text-white">support@validleads.ai</p></div>
         <div className="flex flex-row items-center justify-center gap-2"><img className="object-bottom w-6 h-6 mt-1" src="/images/call.png" alt="phone" /><p className="text-white">+91 342 123-4567</p></div>
        </div>
      </section>
    </footer>
  );
}
