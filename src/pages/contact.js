import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
/*componentes*/
function Contact(){
    const { t } = useTranslation("global");
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
        <div className="container-fluid p-0 bg_contact" id="contact">
            <Helmet>
                <title>Contact Sports Stats 365</title>
                <link rel="canonical" href="https://sportsstats365.com/contact/" />
                <meta name="description" content="Have any questions, suggestions or need to contact us? Click here and leave us a message, chat, email or call us. We would love to hear from you."></meta>
            </Helmet>
            <div className="col-12 py-5">
                    <div className="col-lg-6 mx-auto p-5" name="contact" id="Contact">
                        <div className="col-12 text-white fs-2 text-uppercase">{t('contact.span1')}</div>
                        <form onSubmit={contacSend}>
                            <div className="row g-0">
                                <div className="col-12">
                                    <div className="row g-0">
                                        <input className="col-12 text-white my-3" name="fullname" id="fullname" type="text" placeholder={t('contact.span2')} aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12 text-white">
                                        <div className="row g-0 ">
                                            <input className="text-white col-12 my-3" name="email" id="email" type="email" placeholder={t('contact.span3')} aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />
                                            <input className="text-white col-12 my-3" name="phone" id="phone" type="number" placeholder={t('contact.span4')} aria-label="phone" value={toSend.phone} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="col-12" placeholder={t('contact.span5')} name="message" id="exampleFormControlTextarea1" rows="5" value={toSend.message} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col-12 text-white">
                                        (*) {t('contact.span4')}
                                    </div>
                                    <div className="col-12 text-end py-5">
                                        <button className="bt_white btn" type="submit">{t('butons.join')}  <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="col-12 fs-5 text-center text-white">
                        {t('contact.span7')} <br/>
                            <a className="text-white" href="tel:+1-877-944-3767">+1-877-944-3767</a>
                        </div>
                        <div className="col-12 fs-5 text-center text-white">
                        {t('contact.span8')} <br/>
                            <a className="text-white" href="tel:+01-800-099-0620">+01-800-099-0620</a>
                        </div>
                    </div>
    
            </div>
        </div>
    );
};
export default Contact;
