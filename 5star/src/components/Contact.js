import React,{useState} from 'react';

function Contact(){
    const contact_page={
        marginTop:"100px"
    };
    const [name,setName]=useState('');
    const [tel,setTel]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Inside email app');
        // Send email using fetch or axios
        try {
          const response = await fetch('http://localhost:5000/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, tel, email,message }),
          });
          if (response.ok) {
            // Email sent successfully
            console.log('Email sent successfully!');
          } else {
            // Handle error
            console.error('Failed to send email');
          }
        } catch (error) {
          // Handle error
          console.error('Failed to send email', error);
        }
      };

    return(
        <div className="container_12">
            <div style={contact_page}>
                <div className="grid_5">
                    <h3>Contact Info</h3>
                    <div className="map">
                        <figure className="img_inner">
                            <div>
                                <div className='company_name'>5 STAR FRUIT & VEG LONDON LTD</div>
                                <div className='company_address'>
                                    Stand 14-15 Market Pavilion<br />
                                    New Spitalfields Market<br />
                                    Sherrin Road<br />
                                    London E10 5SH
                                </div>
                                <div className='company_contact'>
                                Tel:020 8558 9763 / 8876<br />
                                Fax:020 8988 0530	
                                </div>
                            </div>
                        </figure>
                        <p>Some text</p>
                        
                    </div>
                </div>
                <div className="grid_6 prefix_1">
                    <h3>Contact Form</h3>
                    <form id="form" onSubmit={handleSubmit}>
                        <div className="success_wrapper">
                            <div className="success">Contact form submitted!<br />
                            <strong>We will be in touch soon.</strong> </div>
                        </div>
                        <fieldset>
                            <label className="name">
                                Name:
                                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                                <br className="clear" />
                                <span className="error error-empty">*This is not a valid name.</span><span className="empty error-empty">*This field is required.</span> 
                            </label>
                            
                            <label className="phone">
                                Telephone:
                                <input type="tel" name="tel" value={tel} onChange={(e)=>setTel(e.target.value)} />
                                <br className="clear" />
                                <span className="error error-empty">*This is not a valid phone number.</span><span className="empty error-empty">*This field is required.</span> 
                            </label>
                            <label className="email">
                                E-Mail:
                                <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                <br className="clear" />
                                <span className="error error-empty">*This is not a valid email address.</span><span className="empty error-empty">*This field is required.</span> 
                            </label>
                            <label className="message">
                                Message:
                                <textarea name='message' rows="5" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                                <br className="clear" />
                                <span className="error">*The message is too short.</span> <span className="empty">*This field is required.</span> 
                            </label>
                            <div className="clear"></div>
                            <div className="btns"><a data-type="reset" className="" href='#'>Clear</a><a data-type="reset" className="" href='#'>tst</a>
                            <button type="submit">Send Email</button>
                            <div className="clear"></div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;