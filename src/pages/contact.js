import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
/*componentes*/
export const Contact = () => {
    const [toSend, setToSend] = useState({
        fullname: '',
        email: '',
        message: '',
        country: '',
        phone: '',
        password: '',
        players: '',
        SportsCasinoHorses: '',
        LiveBettin: '',
        LiveCasino: '',
        DynamicBetting: '',
        PropBuilder: '',
    });

    const contacSend = (e) => {
        e.preventDefault();
        send(
            'service_c5ege19',
            'template_wxz9lki',
            toSend,
            'user_ueDJqGkpi3yp8nodYgnsk'
        )
            .then((response) => {
                alert("The form was sent correctly");
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                alert("The form was not submitted correctly");
                console.log('FAILED...', err);
            });
        e.target.reset()
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="container-fluid p-0 bg_contact">
            <Helmet>
                <title>Contact VIP Per Head </title>
                <link rel="canonical" href="https://www.vipperhead.ag/contact/" />
                <meta name="description" content="Have any questions, suggestions or need to contact us? Click here and leave us a message, chat, email or call us. We would love to hear from you. VIP Per Head, best."></meta>
            </Helmet>
            <div className="col-12 py-5">
       
                    <div className="col-lg-6 mx-auto p-5" name="contact" id="Contact">
                        <div className="col-12 text-white fs-2 text-uppercase">contact us</div>
                        <form onSubmit={contacSend}>
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="row g-0">
                                        <input className="col-12 text-white my-3" name="fullname" id="fullname" type="text" placeholder="FULL NAME*" aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12 text-white">
                                        <div className="row g-0 ">
                                            <input className="text-white col-12 my-3" name="email" id="email" type="email" placeholder="EMAIL ADDRESS*" aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />
                                            <input className="text-white col-12 my-3" name="phone" id="phone" type="number" placeholder="PHONE" aria-label="phone" value={toSend.phone} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="col-12" placeholder="Message" name="message" id="exampleFormControlTextarea1" rows="5" value={toSend.message} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col-12 text-white">
                                        (*) Requiered Fiels
                                    </div>
                                    <div className="col-12 text-end py-5">
                                        <button className="bt_white btn" type="submit">JOIN TODAY  <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
    
            </div>
        </div>
    );
};
