"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from 'next/navigation';


const loadJQueryAndDataTables = async () => {
  const $ = (await import("jquery")).default;
  await import("datatables.net-dt/js/dataTables.dataTables.js");
  return $;
};

const AuthorizeWritersList = () => {

    const router = useRouter();
  useEffect(() => {
    let table;
    loadJQueryAndDataTables()
      .then(($) => {
        window.$ = window.jQuery = $;
        // Initialize DataTable
        table = $("#dataTable").DataTable({
          pageLength: 10,
        });
      })
      .catch((error) => {
        console.error("Error loading jQuery or DataTables:", error);
      });

    return () => {
      // Cleanup DataTable instance
      if (table) table.destroy(true);
    };
  }, []);


  const handleAddClick = () => {
    router.push('/Authorize-writers'); // adjust the path based on your routing
  };
  return (
    <div className='card basic-data-table'>
      <div className='card-header d-flex justify-content-between align-items-center'>
  <h5 className='card-title mb-0'>Authorize Writers List</h5>
  <button 
      className='btn btn-primary-600 radius-8'
      onClick={handleAddClick}
    >
      Add
    </button>

</div>

      <div className='card-body'>
        <table
          className='table bordered-table mb-0'
          id='dataTable'
          data-page-length={10}
        >
          <thead>
            <tr>
              <th scope='col'>
                <div className='form-check style-check d-flex align-items-center'>
                  <input className='form-check-input' type='checkbox' />
                  <label className='form-check-label'>S.L</label>
                </div>
              </th>

         
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Company</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
  
<tbody>
  {[
    {
      id: '01',
      name: 'Kathryn Murphy',
      email: 'kathryn@example.com',
      phone: '0987654321',
      company: 'TechBridge Ltd',
      image: 'assets/images/user-list/user-list1.png',
    },
    {
      id: '02',
      name: 'Ralph Edwards',
      email: 'ralph.edwards@example.com',
      phone: '0987123456',
      company: 'Innovatech Solutions',
      image: 'assets/images/user-list/user-list2.png',
    },
    {
      id: '03',
      name: 'Cody Fisher',
      email: 'cody.f@example.com',
      phone: '0912345678',
      company: 'BrightSpark Corp',
      image: 'assets/images/user-list/user-list1.png',
    },
    {
      id: '04',
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      phone: '0899765432',
      company: 'NextGen Technologies',
      image: 'assets/images/user-list/user-list1.png',
    },
    {
      id: '05',
      name: 'Floyd Miles',
      email: 'floyd@example.com',
      phone: '0888123456',
      company: 'EliteSoft Inc',
      image: 'assets/images/user-list/user-list2.png',
    },
  ].map((user, index) => (
    <tr key={user.id}>
      <td>
        <div className='form-check style-check d-flex align-items-center'>
          <input className='form-check-input' type='checkbox' />
          <label className='form-check-label ms-2'>{user.id}</label>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <img
            src={user.image}
            alt=''
            className='flex-shrink-0 me-12 radius-8'
          />
          <h6 className='text-md mb-0 fw-medium flex-grow-1'>
            {user.name}
          </h6>
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <span className='bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm'>
          {user.company}
        </span>
      </td>
      <td>
        <Link
          href='/Authorize-writers'
          className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
        >
          <Icon icon='iconamoon:eye-light' />
        </Link>
        <Link
          href='/Authorize-writers'
          className='w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center'
        >
          <Icon icon='lucide:edit' />
        </Link>
        <Link
          href='#'
          className='w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center'
        >
          <Icon icon='mingcute:delete-2-line' />
        </Link>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default AuthorizeWritersList;
