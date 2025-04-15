"use client";
import React, { useState } from "react";

const AddBroker = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  

  return (
    <div className='col-md-12'>
      <div className='card'>
        <div className='card-body'>
          <h6 className='mb-4 text-xl'>Add Brokers Informations</h6>
          <p className='text-neutral-500'>
            Fill up your Broker details and proceed next steps.
          </p>
          {/* Form Wizard Start */}
          <div className='form-wizard'>
            <form>
              <div className='form-wizard-header overflow-x-auto scroll-sm pb-8 my-32'>
                <ul className='list-unstyled form-wizard-list'>
                  <li
                    className={`form-wizard-list__item
                      ${[2, 3].includes(currentStep) && "activated"}
                    ${currentStep === 1 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>1</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[3].includes(currentStep) && "activated"}
                      ${currentStep === 2 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>2</span>
                    </div>
                  </li>
                
                  <li
                    className={`form-wizard-list__item ${
                      currentStep === 3 && "active"
                    } `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>3</span>
                    </div>
                  </li>
                </ul>
              </div>
              <fieldset
                className={`wizard-fieldset ${currentStep === 1 && "show"} `}
              >
             
                <div className='row gy-3'>
                  <div className='col-sm-6'>
                    <label className='form-label'>Company Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter First Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Admin's First Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter First Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Admin's Last Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Last Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-6'>
                    <label className='form-label'>Email*</label>
                    <div className='position-relative'>
                      <input
                        type='email'
                        className='form-control wizard-required'
                        placeholder='Enter Email'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Create Password*</label>
                    <div className='position-relative'>
                      <input
                        type='password'
                        className='form-control wizard-required'
                        placeholder='Enter Password'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Confirm Password*</label>
                    <div className='position-relative'>
                      <input
                        type='password'
                        className='form-control wizard-required'
                        placeholder='Enter Confirm Password'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='form-group text-end'>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 2 && "show"} `}
              >
              
                <div className='row gy-3'>
                  <div className='col-6'>
                    <label className='form-label'>Minimum Deposit*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter User Name'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Stock fee *</label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='Enter Card Number '
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>
                      Card Expiration(MM/YY)*
                    </label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='Enter Card Expiration'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <label className='form-label'>Options fee*</label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        className='form-control wizard-required'
                        placeholder='CVV Number'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-6'>
                    <label className='form-label'>Inactivity fee*</label>
                    <div className='position-relative'>
                      <input
                        type='password'
                        className='form-control wizard-required'
                        placeholder='Enter Password'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-6'>
                    <label className='form-label'>Account opening*</label>
                    <div className='position-relative'>
                      <input
                        type='password'
                        className='form-control wizard-required'
                        placeholder='Enter Password'
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>            
              <fieldset
                className={`wizard-fieldset ${currentStep === 3 && "show"} `}
              >
                <div className='text-center mb-40'>
                  <img
                    src='assets/images/gif/success-img3.gif'
                    alt=''
                    className='gif-image mb-24'
                  />
                  <h6 className='text-md text-neutral-600'>Congratulations </h6>
                  <p className='text-neutral-400 text-sm mb-0'>
                    Well done! You have successfully completed.
                  </p>
                </div>
                <div className='form-group d-flex align-items-center justify-content-end gap-8'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    type='button'
                    className='form-wizard-submit btn btn-primary-600 px-32'
                  >
                    Publish
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          {/* Form Wizard End */}
        </div>
      </div>
    </div>
  );
};

export default AddBroker;
