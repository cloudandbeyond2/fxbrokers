"use client";
import React, { useState } from "react";

const AddBrokerInfo = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className='col-md-12'>
      <div className='card'>
        <div className='card-body'>
          <h6 className='mb-4 text-xl'>Add Informations</h6>
          <p className='text-neutral-500'>
            Fill up your details and proceed next steps.
          </p>
          {/* Form Wizard Start */}
          <div className='form-wizard'>
            <form>
              <div className='form-wizard-header overflow-x-auto scroll-sm pb-8 my-32'>
                <ul className='list-unstyled form-wizard-list'>
                  <li
                    className={`form-wizard-list__item
                      ${[2, 3, 4, 5].includes(currentStep) && "activated"}
                    ${currentStep === 1 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>1</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[3, 4, 5].includes(currentStep) && "activated"}
                      ${currentStep === 2 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>2</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[4, 5].includes(currentStep) && "activated"}
                      ${currentStep === 3 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>3</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[5].includes(currentStep) && "activated"}
                      ${currentStep === 4 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>4</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item ${
                      currentStep === 5 && "active"
                    } `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>5</span>
                    </div>
                  </li>
                </ul>
              </div>
              <fieldset
                className={`wizard-fieldset ${currentStep === 1 && "show"} `}
              >
                <h6 className='text-md text-neutral-500'>
               Basic Info
                </h6>
                <div className='row gy-3'>
                    <div className='col-sm-6'>
                      <label className='form-label'>Broker Name*</label>
                      <div className='position-relative'>
                        <input
                          type='text'
                          className='form-control wizard-required'
                          placeholder='Enter Broker Name'
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <label className='form-label'>Company Name / Legal Entity*</label>
                      <div className='position-relative'>
                        <input
                          type='text'
                          className='form-control wizard-required'
                          placeholder='Enter Company or Legal Name'
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-6'>
                      <label className='form-label'>Country of Regulation / Headquarters*</label>
                      <div className='position-relative'>
                        <input
                          type='text'
                          className='form-control wizard-required'
                          placeholder='Enter Country of Regulation or HQ'
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <label className='form-label'>Year Founded</label>
                      <div className='position-relative'>
                        <input
                          type='number'
                          className='form-control wizard-required'
                          placeholder='Enter Year Founded (e.g. 2010)'
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <label className='form-label'>Website URL</label>
                      <div className='position-relative'>
                        <input
                          type='url'
                          className='form-control wizard-required'
                          placeholder='Enter Website URL (e.g. https://broker.com)'
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <label className='form-label'>Email Address</label>
                      <div className='position-relative'>
                        <input
                          type='email'
                          className='form-control wizard-required'
                          placeholder='Enter Broker Contact Email'
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <label className='form-label'>Contact Number</label>
                      <div className='position-relative'>
                        <input
                          type='tel'
                          className='form-control wizard-required'
                          placeholder='Enter Broker Contact Number'
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-sm-6'>
                      <label className='form-label'>Upload Logo</label>
                      <div className='position-relative'>
                        <input
                          type='file'
                          className='form-control wizard-required'
                          accept='image/*'
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
                <h6 className='text-md text-neutral-500'>
                Licensing & Regulation and Account Details 
                                </h6>
                                <div className='row gy-3'>
                                    <div className='col-sm-6'>
                                      <label className='form-label'>Regulatory Authorities</label>
                                      <div className='position-relative'>
                                        <input
                                          type='text'
                                          className='form-control wizard-required'
                                          placeholder='e.g. FCA, ASIC, CySEC'
                                          required
                                        />
                                        <div className='wizard-form-error' />
                                      </div>
                                    </div>

                                    <div className='col-sm-6'>
                                      <label className='form-label'>License Numbers*</label>
                                      <div className='position-relative'>
                                        <input
                                          type='text'
                                          className='form-control wizard-required'
                                          placeholder='e.g. 123456 (FCA), 789012 (ASIC)'
                                          required
                                        />
                                        <div className='wizard-form-error' />
                                      </div>
                                    </div>

                                    <div className='col-sm-6'>
                                      <label className='form-label'>Minimum Deposit*</label>
                                      <div className='position-relative'>
                                        <input
                                          type='text'
                                          className='form-control wizard-required'
                                          placeholder='e.g. $100, €200'
                                          required
                                        />
                                        <div className='wizard-form-error' />
                                      </div>
                                    </div>

                                    <div className='col-sm-6'>
                                      <label className='form-label'>Base Currencies Supported*</label>
                                      <div className='position-relative'>
                                        <input
                                          type='text'
                                          className='form-control wizard-required'
                                          placeholder='e.g. USD, EUR, GBP, JPY'
                                          required
                                        />
                                        <div className='wizard-form-error' />
                                      </div>
                                    </div>

                                    <div className='col-sm-6'>
                                      <label className='form-label'>Account Types Offered*</label>
                                      <div className='position-relative'>
                                        <input
                                          type='text'
                                          className='form-control wizard-required'
                                          placeholder='e.g. Standard, ECN, Demo, Islamic'
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
                <h6 className='text-md text-neutral-500'>Trading Features</h6>
                <div className='row gy-3'>
                          <div className='col-sm-6'>
                            <label className='form-label'>Instruments Offered</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='e.g. Forex, Stocks, Commodities'
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <label className='form-label'>Trading Platforms*</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='e.g. MetaTrader 4, WebTrader'
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <label className='form-label'>Leverage Options*</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='e.g. Up to 1:500'
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <label className='form-label'>Commission / Spread Info*</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='e.g. From 0.1 pips or $5 per lot'
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <label className='form-label'>Options Trading Fee*</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='e.g. $0.50 per contract'
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <label className='form-label'>Inactivity Fee*</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='e.g. $10/month after 12 months'
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          <div className='col-sm-6'>
                            <label className='form-label'>Deposit & Withdrawal Methods*</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='e.g. Bank Transfer, Credit Card, Crypto'
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
                className={`wizard-fieldset ${currentStep === 4 && "show"} `}
              >
                <h6 className='text-md text-neutral-500'>
                Security & Compliance & User Experience
                </h6>
                <div className='row gy-3'>
                <div className='col-sm-6'>
                  <label className='form-label'>2FA Support*</label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control wizard-required'
                      placeholder='e.g. Google Authenticator, SMS Code'
                      required
                    />
                    <div className='wizard-form-error' />
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label className='form-label'>Segregated Client Funds?</label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control wizard-required'
                      placeholder='Yes / No / Partial'
                      required
                    />
                    <div className='wizard-form-error' />
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label className='form-label'>Mobile App Available?*</label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control wizard-required'
                      placeholder='Yes / No (iOS, Android)'
                      required
                    />
                    <div className='wizard-form-error' />
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label className='form-label'>Demo Account Option?</label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control wizard-required'
                      placeholder='Yes / No'
                      required
                    />
                    <div className='wizard-form-error' />
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label className='form-label'>Support Languages</label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control wizard-required'
                      placeholder='e.g. English, Spanish, Mandarin'
                      required
                    />
                    <div className='wizard-form-error' />
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label className='form-label'>Availability Hours</label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control wizard-required'
                      placeholder='e.g. 24/5, Mon–Fri 9am–5pm'
                      required
                    />
                    <div className='wizard-form-error' />
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label className='form-label'>Welcome Bonus or Promotions</label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control wizard-required'
                      placeholder='e.g. 50% deposit bonus, cashback offers'
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
                className={`wizard-fieldset ${currentStep === 5 && "show"} `}
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

export default AddBrokerInfo;
