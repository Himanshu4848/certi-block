import React from "react";
import { FaGear } from "react-icons/fa6";

const NavbarInstitutions = ({ institute, courses }) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Certi-Block</a>
        </div>
        <div className="flex-none gap-3 hidden lg:flex">
          <button
            className="btn btn-secondary"
            onClick={() => {
              document.getElementById("view_courses_modal").showModal();
            }}
          >
            View My Courses
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              document.getElementById("show_profile_modal").showModal();
            }}
          >
            Profile
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Logout
          </button>
        </div>
        <div className="flex-none lg:hidden mr-4">
          <ul className="menu menu-horizontal px-4 min-w-max">
            <li>
              <details>
                <summary>
                  <FaGear />
                </summary>
                <ul className="p-1 z-10 text-sm bg-base-100 rounded-t-none">
                  <li>
                    <button
                      onClick={() => {
                        document
                          .getElementById("view_courses_modal")
                          .showModal();
                      }}
                    >
                      View My Courses
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        document
                          .getElementById("show_profile_modal")
                          .showModal();
                      }}
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Logout Confirmation</h3>
          <p className="py-4">Are you sure you want to logout?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">No</button>
            </form>
            <button
              className="ml-5 btn-error btn"
              onClick={() => {
                sessionStorage.removeItem("address");
                window.location.href = "/";
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </dialog>
      {/* View Courses Modal */}
      <dialog id="view_courses_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Institute Courses</h3>
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead>
                <tr className="text-center text-md md:text-lg">
                  <th>ID</th>
                  <th>Course Name</th>
                </tr>
              </thead>
              <tbody>
                {courses.length > 0 ? (
                  courses.map((course, index) => (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{course}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center" colSpan={2}>
                      No Courses Created
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button id="cancel_view_courses_dialog" className="btn btn-error">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* View Profile Modal */}
      <dialog id="show_profile_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Institute Profile</h3>
          <div className="overflow-x-hidden">
            {institute.name !== "" ? (
              <table className="table">
                <tbody>
                  <tr>
                    <th className="font-bold">Name</th>
                    <td className="text-wrap">{institute.name}</td>
                  </tr>
                  <tr>
                    <th className="font-bold">Address</th>
                    <td>{institute.address}</td>
                  </tr>
                  <tr>
                    <th className="font-bold">Description</th>
                    <td className="text-wrap">{institute.description}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <h5>Loading Profile</h5>
            )}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button id="cancel_view_courses_dialog" className="btn btn-error">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default NavbarInstitutions;
