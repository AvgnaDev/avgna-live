import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import Spinner from "../../../Spinner";
import axios from "axios";
import ServicesEditModal from "./ServiceEditModal";
import ServiceDeleteModal from "./ServiceDeleteModal";

function ServicesTable({ serviceContent }) {
  const [editData, setEditData] = useState([]);
  // EDIT ABOUT CONTENT
  const [editID, setEditID] = useState("");
  const editServiceContent = async (contentId) => {
    setEditID(contentId);
    const URL = `http://localhost:9090/api/v1/service/${contentId}`;
    try {
      <div className="flex justify-center items-center h-[400px]">
        <Spinner /> Loading...
      </div>;
      await axios.get(URL).then((res) => setEditData(res.data));
      setModalStatus(true);
    } catch (err) {
      console.log(err);
    }
  };
  // DELETE ABOUT CONTENT
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  const deleteServiceContent = (contentId) => {
    setDeleteID(contentId);
    setDeleteModalStatus(!deleteModalStatus);
  };
  // MODAL OPEN
  const [modalStatus, setModalStatus] = useState(false);
  const editServiceModalOpen = () => {
    setModalStatus(!modalStatus);
  };
  // CLOSE --> DELETE ABOUT MODAL
  const closeDeleteModal = () => {
    setDeleteModalStatus(false);
  };
  const [notification, setNotification] = useState(true);

  return (
    <React.Fragment>
      <div className="flex flex-col relative">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-x-auto border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 w-full relative">
                  <tr className="w-full">
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      TITLE
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs text-right font-bold text-gray-500 uppercase "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {serviceContent.map((items) => {
                    return (
                      <tr key={items._id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {items._id}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          {items.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                          {items.description}
                        </td>

                        <td className="py-4 text-sm font-medium text-right px-4 flex justify-end">
                          <button
                            onClick={() => editServiceContent(items._id)}
                            className="button button--success mr-4"
                          >
                            <RiIcons.RiEditFill />
                          </button>
                          <button
                            onClick={() => deleteServiceContent(items._id)}
                            className="button button--warning"
                          >
                            <RiIcons.RiDeleteBinFill />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {modalStatus && (
        <ServicesEditModal
          editServiceModalOpen={editServiceModalOpen}
          editData={editData}
          editID={editID}
        />
      )}
      {deleteModalStatus && (
        <ServiceDeleteModal
          deleteID={deleteID}
          closeDeleteModal={closeDeleteModal}
          deleteServiceContent={deleteServiceContent}
        />
      )}
      {/* NOTIFICATION */}
      {notification ? (
        <div
          className={`absolute px-2 py-1 border border-green-200 rounded bottom-[25px] font-semibold bg-green-100 text-green-400 ${
            notification ? "right-4" : "right-80"
          }`}
        >
          <p>Updated Successfully</p>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default ServicesTable;
