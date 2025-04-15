"use client";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import dynamic from "next/dynamic";
import "highlight.js/styles/github.css";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import Link from "next/link";
import { Icon } from "@iconify/react";

const AddBlogLayer = () => {
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
  const [value, setValue] = useState(``);
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
      const [selectedBrokers, setSelectedBrokers] = useState([]);

// const brokerList = [
//   { id: 'broker1', name: 'Alice Johnson' },
//   { id: 'broker2', name: 'David Smith' },
//   { id: 'broker3', name: 'Maria Lopez' },
//   { id: 'broker4', name: 'Tom Clark' },
//   { id: 'broker5', name: 'Nina Patel' },
//   { id: 'broker6', name: 'Eli Grant' },
//   { id: 'broker7', name: 'Sarah Young' },
//   { id: 'broker8', name: 'Daniel Lee' },
//   { id: 'broker9', name: 'Laura Kim' },
//   { id: 'broker10', name: 'James Carter' },
//   { id: 'broker11', name: 'Extra Broker (not shown)' },
// ];
const handleSubmit = (e) => {
  e.preventDefault();

  // Example: gather form values
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    date: e.target.date.value,
    companyName: e.target.companyName.value,
    companyAddress: e.target.companyAddress.value,
    city: e.target.city.value,
    state: e.target.state.value,
    zip: e.target.zip.value,
    authorizedWriters: selectedBrokers,
  };

  console.log('Form Submitted:', formData);

  // You could send this data to an API here...
  // axios.post('/api/submit', formData)
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

  return (
    <div className='row gy-4'>
      <div className='col-lg-12'>
        <div className='card mt-24'>
          <div className='card-header border-bottom'>
            <h6 className='text-xl mb-0'>Add New Post</h6>
          </div>
          <div className='card-body p-24'>
          <form action='#' className='d-flex flex-column gap-20' onSubmit={handleSubmit}>
  {/* Name */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='name'>
      Name
    </label>
    <input
      type='text'
      className='form-control border border-neutral-200 radius-8'
      id='name'
      placeholder='Enter Full Name'
    />
  </div>

  {/* Email */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='email'>
      Email
    </label>
    <input
      type='email'
      className='form-control border border-neutral-200 radius-8'
      id='email'
      placeholder='Enter Email'
    />
  </div>

  {/* Phone Number */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='phone'>
      Phone Number
    </label>
    <input
      type='tel'
      className='form-control border border-neutral-200 radius-8'
      id='phone'
      placeholder='Enter Phone Number'
    />
  </div>

  {/* Date */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='date'>
      Date
    </label>
    <input
      type='date'
      className='form-control border border-neutral-200 radius-8'
      id='date'
    />
  </div>

  {/* Company Name */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='companyName'>
      Company Name
    </label>
    <input
      type='text'
      className='form-control border border-neutral-200 radius-8'
      id='companyName'
      placeholder='Enter Company Name'
    />
  </div>

  {/* Company Address */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='companyAddress'>
      Company Address
    </label>
    <input
      type='text'
      className='form-control border border-neutral-200 radius-8'
      id='companyAddress'
      placeholder='Enter Company Address'
    />
  </div>

  {/* City */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='city'>
      City
    </label>
    <input
      type='text'
      className='form-control border border-neutral-200 radius-8'
      id='city'
      placeholder='Enter City'
    />
  </div>

  {/* State */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='state'>
      State
    </label>
    <input
      type='text'
      className='form-control border border-neutral-200 radius-8'
      id='state'
      placeholder='Enter State'
    />
  </div>

  {/* ZIP */}
  <div>
    <label className='form-label fw-bold text-neutral-900' htmlFor='zip'>
      ZIP Code
    </label>
    <input
      type='text'
      className='form-control border border-neutral-200 radius-8'
      id='zip'
      placeholder='Enter ZIP Code'
    />
  </div>

  {/* Authorize Writers (Brokers) */}
  {/* <div>
    <label className='form-label fw-bold text-neutral-900'>
      Authorize Writers (Brokers):
    </label>
    <select
      multiple
      className='form-control border border-neutral-200 radius-8'
      value={selectedBrokers}
      onChange={(e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(
          (option) => option.value
        );
        if (selectedOptions.length <= 10) {
          setSelectedBrokers(selectedOptions);
        }
      }}
    >
      {brokerList.slice(0, 10).map((broker) => (
        <option key={broker.id} value={broker.id}>
          {broker.name}
        </option>
      ))}
    </select>
    <small className='text-muted'>
      Select up to 10 brokers as authorized writers.
    </small>
  </div> */}

  {/* Submit */}
  <button type='submit' className='btn btn-primary-600 radius-8'>
    Submit
  </button>
</form>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AddBlogLayer;
