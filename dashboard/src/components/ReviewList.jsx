"use client";
import { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";



const loadJQueryAndDataTables = async () => {
    const $ = (await import("jquery")).default;
    await import("datatables.net-dt/js/dataTables.dataTables.js");
    return $;
};

const ReviewList = () => {
    useEffect(() => {
        let table;
        loadJQueryAndDataTables()
            .then(($) => {
                window.$ = window.jQuery = $;
                table = $("#reviewTable").DataTable({
                    pageLength: 10,
                });
            })
            .catch((error) => {
                console.error("Error loading jQuery or DataTables:", error);
            });

        return () => {
            if (table) table.destroy(true);
        };
    }, []);

    const reviews = [
        { id: 1, user: "John Doe", comment: "Great service!", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "Very helpful.", rating: 4 },
        { id: 3, user: "Sam Wilson", comment: "Could be better.", rating: 3 },
        { id: 4, user: "Emily Davis", comment: "Excellent experience!", rating: 5 },
        { id: 5, user: "Michael Brown", comment: "Not bad.", rating: 3 },
    ];

    return (
        <div className="card basic-data-table">
            <div className="card-header d-flex justify-content-between align-items-center">
  <h5 className="card-title mb-0">Review List</h5>
  <Link href="/content-management" className="btn btn-primary-600 radius-8">Add Review</Link>

</div>

            <div className="card-body">
                <table
                    className="table bordered-table mb-0"
                    id="reviewTable"
                    data-page-length={10}
                >
                    <thead>
                        <tr>
                            <th scope="col">S.L</th>
                            <th scope="col">User</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{index + 1}</td>
                                <td>{review.user}</td>
                                <td>{review.comment}</td>
                                <td>
                                    <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                                        {review.rating}/5
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        href="#"
                                        className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="iconamoon:eye-light" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="lucide:edit" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="mingcute:delete-2-line" />
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

export default ReviewList;