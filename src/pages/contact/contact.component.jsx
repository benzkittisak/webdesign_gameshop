import React, { useState } from "react";

const ContactPage = () => {
  const [contactData, setContactData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });

  const { fname, lname, phone, email, message } = contactData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  return (
    <div className="contact-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-email">
              <div className="contact-email-header">
                <h3>ติดต่อเราผ่านทางอีเมล</h3>
                <p>
                  หากคุณต้องการติดต่อกับทางร้าน คุณสามารถทิ้งข้อความของคุณไว้{" "}
                  <br />
                  ผ่านทางด้านล่าง หรือช่องทาง ๆ ที่ทางร้านกำหนด
                </p>
              </div>
              <form className="row">
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    onChange={handleChange}
                    className="contact-input"
                    name="fname"
                    value={fname}
                    placeholder="ชื่อจริง"
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    onChange={handleChange}
                    className="contact-input"
                    name="lname"
                    value={lname}
                    placeholder="นามสกุล"
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    onChange={handleChange}
                    className="contact-input"
                    name="phone"
                    value={phone}
                    placeholder="เบอร์โทรศัพท์"
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    type="text"
                    onChange={handleChange}
                    className="contact-input"
                    name="email"
                    value={email}
                    placeholder="อีเมล"
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <textarea
                    name="message"
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="ข้อความ"
                    id=""
                    cols="30"
                    rows="10"
                  >
                    {message}
                  </textarea>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-another">
              <div className="contact-another-header">
                <h3>ช่องทางอื่น ๆ</h3>
              </div>

              <div className="contact-info">
                <p className="contact-info-title">Facebook</p>
                <p className="contact-info-data">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="contact-info">
                <p className="contact-info-title">Line</p>
                <p className="contact-info-data">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
