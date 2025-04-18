import Clients from "@/components/home-one/Clients";
import DownloadApps from "@/components/home-one/DownloadApps";
import React from "react";

const QuestionsAnswer = () => {
  return (
    <main>
      {/* <!-- faqs --> */}
      <section className="pt-120 pb-120 faq">
        <div className="container">
          <div data-aos="zoom-in" className="title-section text-center">
            <h2 className="display-4 mb-3 fw-semibold">Find Answers to Your Questions</h2>
            <p className="m-text mb-60">Welcome to our FAQs section! Here, we&apos;ve compiled answers to some of the most common questions our users ask.</p>
          </div>

          <div className="tabs">
            <ul className="nav nav-pills bg-white mb-4" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  Stock
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                  Forex
                </button>
              </li>
            
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                <div className="row">
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionExample2">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse7" className="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps9" aria-expanded="false" aria-controls="collapse9">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collaps9" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps10" aria-expanded="false" aria-controls="collapse10">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collaps10" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={1}>
                <div className="row">
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordionex2">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="true" aria-controls="collapseOne">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse21" className="accordion-collapse collapse show" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapseTwo">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse22" className="accordion-collapse collapse" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse23" aria-expanded="false" aria-controls="collapseThree">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse23" className="accordion-collapse collapse" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse24" aria-expanded="false" aria-controls="collapseThree">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collapse24" className="accordion-collapse collapse" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse25" aria-expanded="false" aria-controls="collapseThree">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collapse25" className="accordion-collapse collapse" data-bs-parent="#accordionex2">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-in" className="col-lg-6">
                    <div className="accordion d-flex flex-column gap-4" id="accordion3">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse62" aria-expanded="true" aria-controls="collapse6">
                            How do I use your comparison tool?
                          </button>
                        </h2>
                        <div id="collapse26" className="accordion-collapse collapse" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse27" aria-expanded="false" aria-controls="collapse7">
                            Can I trust the security of your platform?
                          </button>
                        </h2>
                        <div id="collapse27" className="accordion-collapse collapse show" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse28" aria-expanded="false" aria-controls="collapse8">
                            Are your comparisons unbiased?
                          </button>
                        </h2>
                        <div id="collapse28" className="accordion-collapse collapse" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps29" aria-expanded="false" aria-controls="collapse9">
                            Do you recommend specific brokers?
                          </button>
                        </h2>
                        <div id="collaps29" className="accordion-collapse collapse" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps30" aria-expanded="false" aria-controls="collapse10">
                            How do you make money?
                          </button>
                        </h2>
                        <div id="collaps30" className="accordion-collapse collapse" data-bs-parent="#accordion3">
                          <div className="accordion-body">Yes, our comparisons are completely unbiased. We strive to provide accurate and objective evaluations of brokerage platforms based on thorough research.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuestionsAnswer;
