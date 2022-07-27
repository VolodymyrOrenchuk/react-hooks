const Contact = ({ firstName, lastName, phone, gender }) => {
  function imgGender(gender) {
    if (gender === "male") {
      return <div className="male"></div>;
    } else if (gender === "female") {
      return <div className="female"></div>;
    } else {
      return <div className="nongender"></div>;
    }
  }

  return (
    <div className="box">
      <div className="contact">
        <div className="profile-label">
          <h1>{firstName + " " + lastName}</h1>
          <div >
        </div>
          <h2 style={{ display: 'flex' }}>{phone}<div className="phone-icon"></div></h2>
        </div>
        <div className="profile-image">
          <div className="gender">{imgGender(gender)}</div>
          <h3>{gender}</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
