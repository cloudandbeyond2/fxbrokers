    "use client";
    import { useEffect } from "react";
    import Link from "next/link";
    import { Icon } from "@iconify/react/dist/iconify.js";
    import Breadcrumb from "@/components/Breadcrumb";
    // import TableDataLayer from "@/components/TableDataLayer";
    import MasterLayout from "@/masterLayout/MasterLayout";
    const loadJQueryAndDataTables = async () => {
        const $ = (await import("jquery")).default;
        await import("datatables.net-dt/js/dataTables.dataTables.js");
        return $;
      };
      
//    const metadata = {
//       title: "WowDash NEXT JS - Admin Dashboard Multipurpose Bootstrap 5 Template",
//       description:
//         "Wowdash NEXT JS is a developer-friendly, ready-to-use admin template designed for building attractive, scalable, and high-performing web applications.",
//     };
    
    const Page = () => {
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
      return (
        <>
          {/* MasterLayout */}
          <MasterLayout>
            {/* Breadcrumb */}
            <Breadcrumb title='Basic Table' />
    
           <div className='card basic-data-table'>
               <div className='card-header'>
                 <h5 className='card-title mb-0'>View Scam Brokers</h5>
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
                       <th scope='col'>Brokers</th>
                       <th scope='col'>Date</th>
                     
               
                       <th scope='col'>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>
                         <div className='form-check style-check d-flex align-items-center'>
                           <input className='form-check-input' type='checkbox' />
                           <label className='form-check-label'>01</label>
                         </div>
                       </td>
                       <td>
                         <Link href='https://fusionmarkets.com/lpv5?utm_source=google&utm_medium=cpc&utm_campaign=brand-au2&utm_term=fusion%20markets&gad_source=1&gclid=Cj0KCQjw2N2_BhCAARIsAK4pEkUD2o8r6-CqUpIePtiZ8aTwP5VdG9uf92f9NvF8nbiGmsTjcyT1TVAaAjnFEALw_wcB' className='text-primary-600'>
                         Fusion Markets
                         </Link>
                       </td>
                       <td>
                         <div className='d-flex align-items-center'>
                           <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                        15/04/2025
                           </h6>
                         </div>
                       </td>
                     
                       <td>
                         <Link
                           href='#'
                           className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                         >
                           <Icon icon='iconamoon:eye-light' />
                         </Link>
                         <Link
                           href='#'
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
                     <tr>
                       <td>
                         <div className='form-check style-check d-flex align-items-center'>
                           <input className='form-check-input' type='checkbox' />
                           <label className='form-check-label'>02</label>
                         </div>
                       </td>
                       <td>
                         <Link href='https://www.cmcmarkets.com/en' className='text-primary-600'>
                         CMC Markets
                         </Link>
                       </td>
                       <td>
                         <div className='d-flex align-items-center'>
                           <h6 className='text-md mb-0 fw-medium flex-grow-1'>
                           15/04/2025
                           </h6>
                         </div>
                       </td>
                  
        
                       <td>
                         <Link
                           href='#'
                           className='w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center'
                         >
                           <Icon icon='iconamoon:eye-light' />
                         </Link>
                         <Link
                           href='#'
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


                   </tbody>
                 </table>
               </div>
             </div>
            {/* <TableDataLayer /> */}
          </MasterLayout>
        </>
      );
    };
    
    export default Page;
    