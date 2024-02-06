import React, { useEffect, useRef } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Hero from "../../components/page-heading/page-heading";
import "./contact.css";
import { useTranslation } from 'react-i18next';
import Service from "../service/Service";
import PageHeading from "../../components/page-heading/page-heading";


const Contact: React.FC = () => {

  const myRef = useRef<any>(null)
  const { t } = useTranslation();

  useEffect(() => {
    myRef.current.scrollIntoView();
  });

  return <>

    <div className="conntainer-fluid" ref={myRef}>
      <div style={{ paddingTop: "100px" }}>
        <PageHeading></PageHeading>
        <div className="container py-100">
          <div className="row justify-center align-items-center">
            <div className="col-md-6">
              <span className="underline-primary text-bold">ELÉRHETŐSÉGEINK</span>
              <h1 className="title">Duguláselhárítás és csatornatisztítás Győrben</h1>
              <p className="subTitle mb-4">
                Cégünk duguláselhárítással, csatornatisztítással és kamerás csatornavizsgálattal foglalkozik. Immáron több mint 10 éve hárítunk el dugulásokat, tisztítunk és ellenőrzünk csatornarendszereket és állunk Győri lakosok, cégek és szövetkezetek számára Non-Stop rendelkezésre. Kedvező árakon dolgozunk, minden általunk elvégzett duguláselhárításra pedig 1 hónap garanciát vállalunk.
              </p>
              <p className='text-bold'>
                <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 primary-color">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                9022 Győr, Bajcsy-Zsilinszky út 59.
              </p>
              <p className='text-bold py-2'>
                <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 primary-color">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Telefon: +36 70 403 4332
              </p>

              <p className='text-bold'>
                <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 primary-color">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                Email: info@sos-dugulaselharitas.hu
              </p>

              <div className='mt-5'>
                <button type="button" className="btn btn-primary d-flex">
                  <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                    <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>Hívás: +36 00 604 4929</button>
              </div>

            </div>

            <div className="col-md-6">
              <form action="">
                <div className="shadow-lg p-5">
                  <div className="row">
                    {/* First input */}
                    <div className="col-md-6">
                      <label className='form-label'>TELJES NÉV </label>
                      <input type="text" placeholder='text' className="form-control" />
                    </div>

                    {/* Second input */}
                    <div className="col-md-6 mt-4 mt-md-0">
                      <label className='form-label'>EMAIL </label>
                      <input type="text" placeholder='text' className="form-control" />
                    </div>
                  </div>
                  <div className="row mt-4">
                    {/* First input */}
                    <div className="col-md-6">
                      <label className='form-label'>TELEFONSZÁM </label>
                      <input type="text" placeholder='text' className="form-control" />
                    </div>

                    {/* Second input */}
                    <div className="col-md-6 mt-4 mt-md-0">
                      <label className='form-label'>IDÖPONT</label>
                      <input type="date" placeholder='text' className="form-control" />
                    </div>
                  </div>
                  <div className='mt-4'>
                    <label className='form-label'>MVÁLASSZON SZOLGÁLTATÁST </label>
                    <input type="text" placeholder='text' className="form-control" />
                  </div>
                  <div className='mt-4'>
                    <label className='form-label'>VÁLASSZON SZOLGÁLTATÁST</label>
                    <textarea placeholder='text' className="form-control" rows={3} />
                  </div>
                  <div className='mt-4'>
                    <button type="button" className="btn btn-primary d-flex">
                      <svg width={25} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>

                      Visszalàselharitas</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Contact;
