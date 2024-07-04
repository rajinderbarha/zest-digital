import classes from "./Sign_up.module.css";
import Link from "next/link";
function Sign_up() {

  return  <div className="main_padding">
        <div className={`${classes.Sign_up} max-w-[1510px] mx-auto border border-color-1 shadow-dark-pink-right   rounded-[15px] md:rounded-[20px] lg:rounded-30px `} data-aos="fade-up">
          <div className="detail text-center">
            <h2 className={`${classes.form_heading} font-mono font-semibold `}>
              Sign up for early access
            </h2>
            <p className={`${classes.form_desc} font-lato `}>
              Sign up with your email address to be notified on the release of
              our Beta version.
            </p>
          </div>
          <div
            className={`${classes.form_inputs} max-w-[1040px] mx-auto    grid grid-cols-12 lg:gap-x-[40px] lg:gap-y-[0] sm:gap-x-[30px] sm:gap-y-[35px] gap-y-[25px]`}
          >
            <div className="first_name flex flex-col w-full max-w-[300px] lg:col-span-4  sm:col-span-6 col-span-12">
              <label
                htmlFor="fname"
                className={`${classes.input_label} text-color-9 font-semibold font-mono   `}
              >
                First name
              </label>
              <input
                type="text"
                name="fname"
                id=""
                className={`${classes.input_field} border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] `}
                placeholder="John"
              />
            </div>
            <div className="last_name flex flex-col w-full max-w-[300px] lg:col-span-4 sm:col-span-6 col-span-12">
              <label
                htmlFor="lname"
                className={`${classes.input_label} text-color-9 font-semibold font-mono   `}
              >
                Last name
              </label>
              <input
                type="text"
                name="lname"
                id=""
                className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] min-tb:max-tb:text-[18px]"

                placeholder="Doe"
              />
            </div>
            <div className="email flex flex-col w-full max-w-[300px] lg:col-span-4 col-span-12">
              <label
                htmlFor="email"
                className={`${classes.input_label} text-color-9 font-semibold font-mono   `}
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] text-[16px] min-tb:max-tb:text-[18px]"

                placeholder="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className={`${classes.btn_div} button  text-center`}>
            <Link
              href="#">
                <button className="bg-color-1 hover:bg-white hover:text-color-1 border border-color-1 font-mono text-white rounded-full">
            
              Notify me
              </button>
            </Link>
          </div>
          <div className="term_condition max-w-[857px]  mx-auto">
            <p className={`${classes.form_note} font-lato  text-color-1 text-center`}>
              We respect your privacy, and you’ll only be contacted about Growth
              Tracker.
            </p>
          </div>
        </div>
      </div>
}
export default Sign_up;

