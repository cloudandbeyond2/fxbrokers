"use client";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import dynamic from "next/dynamic";
import "highlight.js/styles/github.css";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import Link from "next/link";
import { Icon } from "@iconify/react";

const Addreview = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const src = URL.createObjectURL(e.target.files[0]);
      setImagePreview(src);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };
  const quillRef = useRef(null);
  // const [value, setValue] = useState(``);
  const [tabValues, setTabValues] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: ""
  });

  
  
  // eslint-disable-next-line no-unused-vars
  const [isHighlightReady, setIsHighlightReady] = useState(false);

  useEffect(() => {
    // Load highlight.js configuration and signal when ready
    hljs?.configure({
      languages: [
        "javascript",
        "ruby",
        "python",
        "java",
        "csharp",
        "cpp",
        "go",
        "php",
        "swift",
      ],
    });
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleSave = () => {
    const editorContent = quillRef.current.getEditor().root.innerHTML;
    console.log("Editor content:", editorContent);
  };

  // Quill editor modules with syntax highlighting (only load if highlight.js is ready)
  const modules = isHighlightReady
    ? {
        syntax: {
          highlight: (text) => hljs?.highlightAuto(text).value, // Enable highlight.js in Quill
        },
        toolbar: {
          container: "#toolbar-container", // Custom toolbar container
        },
      }
    : {
        toolbar: {
          container: "#toolbar-container", // Custom toolbar container
        },
      };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "list",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  const toolbarOptions = [
    [{ 'font': [] }, { 'size': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'header': 1 }, { 'header': 2 }, 'blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }, { 'align': [] }],
    ['link', 'image', 'video', 'formula'],
    ['clean']
  ];

  return (
    <div className='row gy-4'>
  <div className='col-lg-4'>
    <div className='card'>
      <div className='card-body p-0'>
        <div className='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
          <button
            className='nav-link active'
            id='v-pills-tab1-tab'
            data-bs-toggle='pill'
            data-bs-target='#v-pills-tab1'
            type='button'
            role='tab'
            aria-controls='v-pills-tab1'
            aria-selected='true'
          >
            Key Data
          </button>
          <button
            className='nav-link'
            id='v-pills-tab2-tab'
            data-bs-toggle='pill'
            data-bs-target='#v-pills-tab2'
            type='button'
            role='tab'
            aria-controls='v-pills-tab2'
            aria-selected='false'
          >
            Fees
          </button>
          {/* Add more tabs as needed up to Tab 10 */}
          <button
            className='nav-link'
            id='v-pills-tab3-tab'
            data-bs-toggle='pill'
            data-bs-target='#v-pills-tab3'
            type='button'
            role='tab'
            aria-controls='v-pills-tab3'
            aria-selected='false'
          >
            Safety
          </button>
          <button
            className='nav-link'
            id='v-pills-tab4-tab'
            data-bs-toggle='pill'
            data-bs-target='#v-pills-tab4'
            type='button'
            role='tab'
            aria-controls='v-pills-tab4'
            aria-selected='false'
          >
            Deposit and withdrawals
          </button>
          
          <button
            className='nav-link'
            id='v-pills-tab5-tab'
            data-bs-toggle='pill'
            data-bs-target='#v-pills-tab5'
            type='button'
            role='tab'
            aria-controls='v-pills-tab5'
            aria-selected='false'
          >
            Account opening

          </button>

          <button
            className='nav-link'
            id='v-pills-tab6-tab'
            data-bs-toggle='pill'
            data-bs-target='#v-pills-tab6'
            type='button'
            role='tab'
            aria-controls='v-pills-tab6'
            aria-selected='false'
          >
            Mobile app


          </button>

          <button
            className='nav-link'
            id='v-pills-tab7-tab'
            data-bs-toggle='pill'
            data-bs-target='#v-pills-tab7'
            type='button'
            role='tab'
            aria-controls='v-pills-tab7'
            aria-selected='false'
          >
            Desktop platform


          </button>

          <button
            className='nav-link'
            id='v-pills-tab8-tab'
            data-bs-toggle='pill'
            data-bs-target='#v-pills-tab8'
            type='button'
            role='tab'
            aria-controls='v-pills-tab8'
            aria-selected='false'
          >
            Product selection

          </button>
          {/* Continue up to Tab 10 */}
        </div>
      </div>
    </div>
  </div>

  <div className='col-lg-8'>
    <div className='tab-content' id='v-pills-tabContent'>
      {/* Tab 1 Content */}
      <div className='tab-pane fade show active' id='v-pills-tab1' role='tabpanel' aria-labelledby='v-pills-tab1-tab'>
        <div className='card mt-24'>
          {/* <div className='card-header border-bottom'>
            <h6 className='text-xl mb-0'>Add New Post </h6>
          </div> */}
          <div className='card-body p-24'>
            {/* Your existing form content */}
            <form action='#' className='d-flex flex-column gap-20'>

            <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='score'
                >
                  Score
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='score'
                  placeholder='Enter score'
                />
              </div>

            <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='title'
                >
                  No of People trusted this broker:{" "}
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='title'
                  placeholder='Enter No of People trusted this broker'
                />
              </div>
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                  Available Country:{" "}
                </label>
                <select className='form-control border border-neutral-200 radius-8'>
                  <option value=''>India</option>
                  <option value=''>Australia</option>
                  <option value=''>USA</option>
                  <option value=''>Japan</option>
                </select>
              </div>
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                Why Choose  
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>
                    {/* Toolbar */}
                    {/* <div id='toolbar-container'>
                      <span className='ql-formats'>
                        <select className='ql-font'></select>
                        <select className='ql-size'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-bold'></button>
                        <button className='ql-italic'></button>
                        <button className='ql-underline'></button>
                        <button className='ql-strike'></button>
                      </span>
                      <span className='ql-formats'>
                        <select className='ql-color'></select>
                        <select className='ql-background'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-script' value='sub'></button>
                        <button className='ql-script' value='super'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-header' value='1'></button>
                        <button className='ql-header' value='2'></button>
                        <button className='ql-blockquote'></button>
                        <button className='ql-code-block'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-list' value='ordered'></button>
                        <button className='ql-list' value='bullet'></button>
                        <button className='ql-indent' value='-1'></button>
                        <button className='ql-indent' value='+1'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-direction' value='rtl'></button>
                        <select className='ql-align'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-link'></button>
                        <button className='ql-image'></button>
                        <button className='ql-video'></button>
                        <button className='ql-formula'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-clean'></button>
                      </span>
                    </div> */}

                    {/* Editor */}
                    <ReactQuill
  className="height-200"
  value={tabValues[1]}
  onChange={(content) =>
    setTabValues((prev) => ({ ...prev, 1: content }))
  }
  modules={{
    syntax: isHighlightReady,
    toolbar: toolbarOptions,
  }}
/>

                  </div>
                </div>
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='pros'
                >
                  Pros
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='pros'
                  placeholder='Enter pros'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='cons'
                >
                  Cons
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='cons'
                  placeholder='Enter cons'
                />
              </div>


              

              {/* <div>
                <label className='form-label fw-bold text-neutral-900'>
                  Upload Thumbnail
                </label>
                <div className='upload-image-wrapper'>
                  {imagePreview ? (
                    <div className='uploaded-img position-relative h-160-px w-100 border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50'>
                      <button
                        type='button'
                        onClick={handleRemoveImage}
                        className='uploaded-img__remove position-absolute top-0 end-0 z-1 text-2xxl line-height-1 me-8 mt-8 d-flex'
                        aria-label='Remove uploaded image'
                      >
                        <Icon
                          icon='radix-icons:cross-2'
                          className='text-xl text-danger-600'
                        ></Icon>
                      </button>
                      <img
                        id='uploaded-img__preview'
                        className='w-100 h-100 object-fit-cover'
                        src={imagePreview}
                        alt='Uploaded'
                      />
                    </div>
                  ) : (
                    <label
                      className='upload-file h-160-px w-100 border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1'
                      htmlFor='upload-file'
                    >
                      <iconify-icon
                        icon='solar:camera-outline'
                        className='text-xl text-secondary-light'
                      ></iconify-icon>
                      <span className='fw-semibold text-secondary-light'>
                        Upload
                      </span>
                      <input
                        id='upload-file'
                        type='file'
                        hidden
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
              </div> */}
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Tab 2 Content */}
      <div className='tab-pane fade' id='v-pills-tab2' role='tabpanel' aria-labelledby='v-pills-tab2-tab'>
       <div className='card mt-24'>
          {/* <div className='card-header border-bottom'>
            <h6 className='text-xl mb-0'>Add New Post </h6>
          </div> */}
          <div className='card-body p-24'>
            {/* Your existing form content */}
            <form action='#' className='d-flex flex-column gap-20'>

            <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='score'
                >
                  Score
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='score'
                  placeholder='Enter score'
                />
              </div>
              
            {/* <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='title'
                >
                  No of People trusted this broker:{" "}
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='title'
                  placeholder='Enter No of People trusted this broker'
                />
              </div> */}
              {/* <div>
                <label className='form-label fw-bold text-neutral-900'>
                  Available Country:{" "}
                </label>
                <select className='form-control border border-neutral-200 radius-8'>
                  <option value=''>India</option>
                  <option value=''>Australia</option>
                  <option value=''>USA</option>
                  <option value=''>Japan</option>
                </select>
              </div> */}
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                Why Choose  
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>
                    {/* Toolbar */}
                    {/* <div id='toolbar-container'>
                      <span className='ql-formats'>
                        <select className='ql-font'></select>
                        <select className='ql-size'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-bold'></button>
                        <button className='ql-italic'></button>
                        <button className='ql-underline'></button>
                        <button className='ql-strike'></button>
                      </span>
                      <span className='ql-formats'>
                        <select className='ql-color'></select>
                        <select className='ql-background'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-script' value='sub'></button>
                        <button className='ql-script' value='super'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-header' value='1'></button>
                        <button className='ql-header' value='2'></button>
                        <button className='ql-blockquote'></button>
                        <button className='ql-code-block'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-list' value='ordered'></button>
                        <button className='ql-list' value='bullet'></button>
                        <button className='ql-indent' value='-1'></button>
                        <button className='ql-indent' value='+1'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-direction' value='rtl'></button>
                        <select className='ql-align'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-link'></button>
                        <button className='ql-image'></button>
                        <button className='ql-video'></button>
                        <button className='ql-formula'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-clean'></button>
                      </span>
                    </div> */}

                    {/* Editor */}
                    <ReactQuill
  className="height-200"
  value={tabValues[2]}
  onChange={(content) =>
    setTabValues((prev) => ({ ...prev, 2: content }))
  }
  modules={{
    syntax: isHighlightReady,
    toolbar: toolbarOptions,
  }}
/>
                  </div>
                </div>
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='pros'
                >
                  Pros
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='pros'
                  placeholder='Enter pros'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='cons'
                >
                  Cons
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='cons'
                  placeholder='Enter cons'
                />
              </div>           
              
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Tab 3 Content */}
      <div className='tab-pane fade' id='v-pills-tab3' role='tabpanel' aria-labelledby='v-pills-tab3-tab'>
      <div className='card mt-24'>
        
          <div className='card-body p-24'>
        
            <form action='#' className='d-flex flex-column gap-20'>

        
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                Why Choose  
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>
                   

                    {/* Editor */}
                    <ReactQuill
  className="height-200"
  value={tabValues[3]}
  onChange={(content) =>
    setTabValues((prev) => ({ ...prev, 3: content }))
  }
  modules={{
    syntax: isHighlightReady,
    toolbar: toolbarOptions,
  }}
/>
                  </div>
                </div>
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='pros'
                >
                  Pros
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='pros'
                  placeholder='Enter pros'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='cons'
                >
                  Cons
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='cons'
                  placeholder='Enter cons'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='title'
                >
                  Is Regulated
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='isregulated'
                  placeholder='Check isregulated'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='safetouse'
                >
                  Is Safe
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='safetouse'
                  placeholder='Whether Safe to use'
                />
              </div>


              

             
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Continue with more tab content sections up to Tab 10 */}
      <div className='tab-pane fade' id='v-pills-tab4' role='tabpanel' aria-labelledby='v-pills-tab4-tab'>
      <div className='card mt-24'>
          {/* <div className='card-header border-bottom'>
            <h6 className='text-xl mb-0'>Add New Post </h6>
          </div> */}
          <div className='card-body p-24'>
            {/* Your existing form content */}
            <form action='#' className='d-flex flex-column gap-20'>
            <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='score'
                >
                  Score
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='score'
                  placeholder='Enter score'
                />
              </div>

            {/* <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='title'
                >
                  No of People trusted this broker:{" "}
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='title'
                  placeholder='Enter No of People trusted this broker'
                />
              </div> */}
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                  Available Country:{" "}
                </label>
                <select className='form-control border border-neutral-200 radius-8'>
                  <option value=''>India</option>
                  <option value=''>Australia</option>
                  <option value=''>USA</option>
                  <option value=''>Japan</option>
                </select>
              </div>
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                Why Choose  
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>
                    {/* Toolbar */}
                    {/* <div id='toolbar-container'>
                      <span className='ql-formats'>
                        <select className='ql-font'></select>
                        <select className='ql-size'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-bold'></button>
                        <button className='ql-italic'></button>
                        <button className='ql-underline'></button>
                        <button className='ql-strike'></button>
                      </span>
                      <span className='ql-formats'>
                        <select className='ql-color'></select>
                        <select className='ql-background'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-script' value='sub'></button>
                        <button className='ql-script' value='super'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-header' value='1'></button>
                        <button className='ql-header' value='2'></button>
                        <button className='ql-blockquote'></button>
                        <button className='ql-code-block'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-list' value='ordered'></button>
                        <button className='ql-list' value='bullet'></button>
                        <button className='ql-indent' value='-1'></button>
                        <button className='ql-indent' value='+1'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-direction' value='rtl'></button>
                        <select className='ql-align'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-link'></button>
                        <button className='ql-image'></button>
                        <button className='ql-video'></button>
                        <button className='ql-formula'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-clean'></button>
                      </span>
                    </div> */}

                    {/* Editor */}
                    <ReactQuill
  className="height-200"
  value={tabValues[4]}
  onChange={(content) =>
    setTabValues((prev) => ({ ...prev, 4: content }))
  }
  modules={{
    syntax: isHighlightReady,
    toolbar: toolbarOptions,
  }}
/>
                  </div>
                </div>
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='pros'
                >
                  Pros
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='pros'
                  placeholder='Enter pros'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='cons'
                >
                  Cons
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='cons'
                  placeholder='Enter cons'
                />
              </div>            

            
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='tab-pane fade' id='v-pills-tab5' role='tabpanel' aria-labelledby='v-pills-tab5-tab'>
      <div className='card mt-24'>
         
          <div className='card-body p-24'>
            {/* Your existing form content */}
            <form action='#' className='d-flex flex-column gap-20'>
            <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='score'
                >
                  Score
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='score'
                  placeholder='Enter score'
                />
              </div>

            {/* <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='title'
                >
                  No of People trusted this broker:{" "}
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='title'
                  placeholder='Enter No of People trusted this broker'
                />
              </div> */}
              {/* <div>
                <label className='form-label fw-bold text-neutral-900'>
                  Available Country:{" "}
                </label>
                <select className='form-control border border-neutral-200 radius-8'>
                  <option value=''>India</option>
                  <option value=''>Australia</option>
                  <option value=''>USA</option>
                  <option value=''>Japan</option>
                </select>
              </div> */}
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                Why Choose  
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>
                    {/* Toolbar */}
                    {/* <div id='toolbar-container'>
                      <span className='ql-formats'>
                        <select className='ql-font'></select>
                        <select className='ql-size'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-bold'></button>
                        <button className='ql-italic'></button>
                        <button className='ql-underline'></button>
                        <button className='ql-strike'></button>
                      </span>
                      <span className='ql-formats'>
                        <select className='ql-color'></select>
                        <select className='ql-background'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-script' value='sub'></button>
                        <button className='ql-script' value='super'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-header' value='1'></button>
                        <button className='ql-header' value='2'></button>
                        <button className='ql-blockquote'></button>
                        <button className='ql-code-block'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-list' value='ordered'></button>
                        <button className='ql-list' value='bullet'></button>
                        <button className='ql-indent' value='-1'></button>
                        <button className='ql-indent' value='+1'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-direction' value='rtl'></button>
                        <select className='ql-align'></select>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-link'></button>
                        <button className='ql-image'></button>
                        <button className='ql-video'></button>
                        <button className='ql-formula'></button>
                      </span>
                      <span className='ql-formats'>
                        <button className='ql-clean'></button>
                      </span>
                    </div> */}

                    {/* Editor */}
                    <ReactQuill
  className="height-200"
  value={tabValues[5]}
  onChange={(content) =>
    setTabValues((prev) => ({ ...prev, 5: content }))
  }
  modules={{
    syntax: isHighlightReady,
    toolbar: toolbarOptions,
  }}
/>
                  </div>
                </div>
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='pros'
                >
                  Pros
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='pros5'
                  placeholder='Enter pros'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='cons'
                >
                  Cons
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='cons5'
                  placeholder='Enter cons'
                />
              </div>            

            
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>


      <div className='tab-pane fade' id='v-pills-tab6' role='tabpanel' aria-labelledby='v-pills-tab6-tab'>
      <div className='card mt-24'>
         
          <div className='card-body p-24'>
            {/* Your existing form content */}
            <form action='#' className='d-flex flex-column gap-20'>
            <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='score'
                >
                  Score
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='score'
                  placeholder='Enter score'
                />
              </div>

            
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                Why Choose  
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>
                    

                    {/* Editor */}
                    <ReactQuill
  className="height-200"
  value={tabValues[6]}
  onChange={(content) =>
    setTabValues((prev) => ({ ...prev, 6: content }))
  }
  modules={{
    syntax: isHighlightReady,
    toolbar: toolbarOptions,
  }}
/>
                  </div>
                </div>
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='pros'
                >
                  Pros
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='pros6'
                  placeholder='Enter pros'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='cons'
                >
                  Cons
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='cons6'
                  placeholder='Enter cons'
                />
              </div>            

            
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>



      <div className='tab-pane fade' id='v-pills-tab7' role='tabpanel' aria-labelledby='v-pills-tab7-tab'>
      <div className='card mt-24'>         
          <div className='card-body p-24'>
            {/* Your existing form content */}
            <form action='#' className='d-flex flex-column gap-20'>
            <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='score'
                >
                  Score
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='score'
                  placeholder='Enter score'
                />
              </div>

            
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                Why Choose  
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>
                    

                    {/* Editor */}
                    <ReactQuill
  className="height-200"
  value={tabValues[7]}
  onChange={(content) =>
    setTabValues((prev) => ({ ...prev, 7: content }))
  }
  modules={{
    syntax: isHighlightReady,
    toolbar: toolbarOptions,
  }}
/>
                  </div>
                </div>
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='pros'
                >
                  Pros
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='pros7'
                  placeholder='Enter pros'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='cons'
                >
                  Cons
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='cons7'
                  placeholder='Enter cons'
                />
              </div>            

            
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>


      <div className='tab-pane fade' id='v-pills-tab8' role='tabpanel' aria-labelledby='v-pills-tab8-tab'>
      <div className='card mt-24'>         
          <div className='card-body p-24'>
            {/* Your existing form content */}
            <form action='#' className='d-flex flex-column gap-20'>
            <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='score'
                >
                  Score
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='score'
                  placeholder='Enter score'
                />
              </div>

            
              <div>
                <label className='form-label fw-bold text-neutral-900'>
                Why Choose  
                </label>
                <div className='border border-neutral-200 radius-8 overflow-hidden'>
                  <div className='height-200'>                   

                    {/* Editor */}
                    <ReactQuill
  className="height-200"
  value={tabValues[8]}
  onChange={(content) =>
    setTabValues((prev) => ({ ...prev, 8: content }))
  }
  modules={{
    syntax: isHighlightReady,
    toolbar: toolbarOptions,
  }}
/>
                  </div>
                </div>
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='pros'
                >
                  Pros
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='pros8'
                  placeholder='Enter pros'
                />
              </div>


              <div>
                <label
                  className='form-label fw-bold text-neutral-900'
                  htmlFor='cons'
                >
                  Cons
                </label>
                <input
                  type='text'
                  className='form-control border border-neutral-200 radius-8'
                  id='cons8'
                  placeholder='Enter cons'
                />
              </div>            

            
              <button type='submit' className='btn btn-primary-600 radius-8'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* ... up to Tab 10 */}
    </div>
  </div>
</div>
  );
};

export default Addreview;