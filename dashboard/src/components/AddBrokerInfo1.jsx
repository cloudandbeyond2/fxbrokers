"use client";
import React, { useState } from "react";

const AddbrokerInfo = () => {
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
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    brokers: '',
    regulatoryLicenses: '', // Multi-select support
    country: '',
    address: '',
    locationLink: '',
  });
  

  const [offices, setOffices] = useState([]);
  const handleAddOffice = () => {
    if (formData.country && formData.address && formData.locationLink) {
      setOffices((prevOffices) => [
        ...prevOffices,
        { ...formData }
      ]);
      setFormData({ country: '', address: '', locationLink: '' }); // Reset formData after adding
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
                    className={`form-wizard-list__item ${
                      [2, 3].includes(currentStep) && "activated"
                    } ${currentStep === 1 && "active"}`}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>1</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item ${
                      currentStep === 2 && "active"
                    } ${currentStep === 3 && "activated"}`}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>2</span>
                    </div>
                  </li>
                  <li
                    className={`form-wizard-list__item ${
                      currentStep === 3 && "active"
                    }`}
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
                <h6 className='text-md text-neutral-500'>
               Basic Info
                </h6>
                <div className='row gy-3'>
                  

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

                    <div className='col-sm-6'>
                      <label className='form-label'>Brand Name*</label>
                      <div className='position-relative'>
                        <input
                          type='text'
                          className='form-control wizard-required'
                          placeholder='Enter Brand Name '
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-6'>
                      <label className='form-label'>Website Links*</label>
                      <div className='position-relative'>
                        <input
                          type='text'
                          className='form-control wizard-required'
                          placeholder='Enter Website URL (e.g. https://broker.com)'
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

                    <div className='col-md-6'>
      <label className='form-label'>Type Of Brokers</label>
      <select
        name='brokers'
        className='form-control w-100'
        value={formData.brokers}
        onChange={handleChange}
        required
      >
        <option value=''>Select Broker Type</option>
        {[
          "ECN",
          "Market Maker",
          "Stock Broker",
          "Forex",
          "CFD Broker",
          "Features",
          "Crypto",
          "Trading View",
        ].map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>





    <div className='col-md-6'>
      <label className='form-label'>Regulatory Licenses <small>(Select One or Many)</small></label>
      <select
        name='regulatoryLicenses'
        className='form-control w-100'
        value={formData.regulatoryLicenses}
        onChange={handleChange}
        required
      >
        <option value=''>Select Broker Type</option>
   
          {[
      "CySEC Regulated Forex Brokers (Cyprus)",
      "FCA Regulated Forex Brokers (UK)",
      "IFSC Regulated Forex Brokers (Belize)",
      "ASIC Regulated Forex Brokers (Australia)",
      "NFA Regulated Forex Brokers (USA)",
      "IIROC Regulated Forex Brokers (Canada)",
      "FINMA Regulated Forex Brokers (Swiss)",
      "DFSA Regulated Forex Brokers (Dubai, UAE)",
      "FSA Regulated Forex Brokers (Seychelles)",
      "FSC Regulated Forex Brokers (Mauritius)",
      "MAS Regulated Forex Brokers (Singapore)",
      "FSA Regulated Forex Brokers (SVG)",
      "CNMV Regulated Forex Brokers (Spain)",
      "FSCA Regulated Forex Brokers (South Africa)",
      "BaFin Regulated Forex Brokers (Germany)",
      "ACPR Regulated Forex Brokers (France)",
      "CONSOB Regulated Forex Brokers (Italy)",
      "FSA Regulated Forex Brokers (Norway)",
      "AFM Regulated Forex Brokers (Netherlands)",
      "FMA / FSPR Regulated Forex Brokers (New Zealand)",
      "MFSA Regulated Forex Brokers (Malta)",
      "PFSA Regulated Forex Brokers (Poland)",
      "FIN-FSA Regulated Forex Brokers (Finland)",
      "Financial Commission Regulated Forex Brokers",
      "VFSC Regulated Forex Brokers (Vanuatu)",
      "FMA Regulated Forex Brokers (Austria)",
      "JFSA Regulated Forex Brokers (Japan)",
      "CIMA Regulated Forex Brokers (Cayman)",
      "SCB Regulated Forex Brokers (Bahamas)",
      "SCA Regulated Forex Brokers (UAE)",
      "Mwali (Comoros) Regulated Forex Brokers",
      "CMA Regulated Forex Brokers (Kenya)",
        ].map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>


    <div className='col-6'>
                      <label className='form-label'>License Number*</label>
                      <div className='position-relative'>
                        <input
                          type='number'
                          className='form-control wizard-required'
                          placeholder='Enter License Number'
                          required
                        />
                        <div className='wizard-form-error' />
                      </div>
                    </div>

                    <div className='col-6'>
  <label className='form-label'>Select Expiry Date*</label>
  <div className='position-relative'>
    <input
      type='date'
      className='form-control wizard-required'
      required
    />
    <div className='wizard-form-error' />
  </div>
</div>



<div className='col-sm-6'>
  <label className='form-label'>License Certificate Copy*</label>
  <div className='position-relative'>
    <input
      type='file'
      className='form-control wizard-required'
      accept='.pdf, image/*'  // Allows both PDF and image files
      required
    />
    <div className='wizard-form-error' />
  </div>
</div>


<div className='col-6'>
  <label className='form-label'>Head Quarters*</label>
  <div className='position-relative mb-2'>
    <input
      type='text'
      className='form-control wizard-required'
      placeholder='Enter or Select Location'
      required
    />
  </div></div>
  {/* <div className='col-6'>
  <label className='form-label'>Attach Location Link*</label>
  <div className='position-relative'>
    <input
      type='url'
      className='form-control wizard-required'
      placeholder='Enter Location URL (e.g. https://maps.google.com/...)'
      required
    />
    <div className='wizard-form-error' />
  </div>
</div> */}





  <div className='col-6'>
    <label className='form-label'>Client Accepting Countries*</label>
    <div className='position-relative mb-2'>
      <select className='form-control wizard-required' required>
        <option value=''>Select Country</option>
        <option value='USA'>USA</option>
        <option value='UK'>UK</option>
        <option value='India'>India</option>
      
      </select>
    </div>
  </div>

  <div className='col-6'>
    <label className='form-label'>Company CEO*</label>
    <div className='position-relative mb-2'>
      <input
        type='text'
        className='form-control wizard-required'
        placeholder='Enter Name & Attach About Us Link'
        required
      />
    </div>
  </div>


  <div className='col-12'>
      <label className='form-label'>Operational Offices*</label>
      
      {/* Office Entry Form */}
      <div className='office-entry mb-3'>
        <div className='row'>
          <div className='col-md-3 mb-2'>
            <select
              className='form-control wizard-required'
              name='country'
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value=''>Select Country</option>
              <option value='USA'>USA</option>
              <option value='UK'>UK</option>
              <option value='India'>India</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className='col-md-3 mb-2'>
            <input
              type='text'
              className='form-control wizard-required'
              name='address'
              value={formData.address}
              onChange={handleChange}
              placeholder='Enter Office Address'
              required
            />
          </div>
          <div className='col-md-3 mb-2'>
            <input
              type='url'
              className='form-control wizard-required'
              name='locationLink'
              value={formData.locationLink}
              onChange={handleChange}
              placeholder='Enter Location Link'
              required
            />
          </div>
          {/* Button to add office */}
          <div className='col-md-3 mb-2'>
            <button
              type='button'
              className='btn btn-sm btn-secondary'
              onClick={handleAddOffice}
            >
              + Add Another Office
            </button>
          </div>
        </div>
      </div>

      {/* Display List of Added Offices */}
      <div className='added-offices'>
        {/* <h5>Added Offices</h5> */}
        <ul className='list-group'>
          {offices.map((office, index) => (
            <li key={index} className='list-group-item'>
              <strong>Country:</strong> {office.country} <br />
              <strong>Address:</strong> {office.address} <br />
              <strong>Location Link:</strong> <a href={office.locationLink} target='_blank' rel='noopener noreferrer'>{office.locationLink}</a>
            </li>
          ))}
        </ul>
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

export default AddbrokerInfo;
