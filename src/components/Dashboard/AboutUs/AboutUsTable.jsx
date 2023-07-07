import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import axios from "axios";
import Spinner from "../../../Spinner";
import AboutEditModal from "./AboutEditModal";
import AboutDeleteModal from "./AboutDeleteModal";

const AboutUsTable = ({ aboutContent }) => {
  const [editData, setEditData] = useState([]);
  const [editModalStatus, setEditModalStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  // EDIT ABOUT CONTENT
  const [editID, setEditID] = useState("");
  const editAboutContent = async (contentId) => {
    setEditID(contentId);
    const URL = `https://avgna.onrender.com/api/v1/about/${contentId}`;
    try {
      <div className="flex justify-center items-center h-[400px]">
        <Spinner /> Loading...
      </div>;
      await axios.get(URL).then((res) => setEditData(res.data));
      setEditModalStatus(true);
    } catch (err) {
      console.log(err);
    }
  };
  const editModalClose = () => {
    setEditModalStatus(!editModalStatus);
  };

  // DELETE ABOUT CONTENT
  const [deleteID, setDeleteID] = useState("");
  const deleteAboutContent = (contentId) => {
    setDeleteID(contentId);
    setDeleteModalStatus(!deleteModalStatus);
  };
  // CLOSE --> DELETE ABOUT MODAL
  const closeDeleteModal = () => {
    setDeleteModalStatus(false);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col relative">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
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
                      About
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Experiance
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
                  {aboutContent.map((items) => {
                    return (
                      <tr key={items._id}>
                        <td className="px-3 md:px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {items._id}
                        </td>
                        <td className="px-3 md:px-6 py-4 text-sm text-gray-800 whitespace-wrap">
                          {items.about}
                        </td>
                        <td className="px-3 md:px-6 py-4 text-center text-sm text-gray-800 whitespace-nowrap font-semibold uppercase">
                          {items.experiance}
                        </td>
                        <td className="py-4 text-sm font-medium text-right px-4 flex justify-end">
                          <button
                            onClick={() => editAboutContent(items._id)}
                            className="button button--success mr-4"
                          >
                            <RiIcons.RiEditFill />
                          </button>
                          <button
                            onClick={() => deleteAboutContent(items._id)}
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
      {editModalStatus && (
        <AboutEditModal
          editModalClose={editModalClose}
          editData={editData}
          idForEdit={editID}
        />
      )}

      {deleteModalStatus && (
        <AboutDeleteModal
          deleteID={deleteID}
          closeDeleteModal={closeDeleteModal}
          deleteAboutContent={deleteAboutContent}
        />
      )}
    </React.Fragment>
  );
};

export default AboutUsTable;
