const Dev = () => {
  return (
    <>
      <div className="modal fade  w-full h-full outline-none">
        {/* <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                <p>
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>
                  This content should appear at the bottom after you scroll.
                </p>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div> */}
      </div>
      
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalScrollable"
        >
          Launch demo modal dialog scrollable
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalScrollable"
          tabindex="-1"
          aria-labelledby="exampleModalScrollableLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body relative p-4">
                <p>
                  This is some placeholder content to show the scrolling
                  behavior for modals. We use repeated line breaks to
                  demonstrate how content can exceed minimum inner height,
                  thereby showing inner scrolling. When content becomes longer
                  than the predefined max-height of modal, content will be
                  cropped and scrollable within the modal.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>
                  This content should appear at the bottom after you scroll.
                </p>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-200 p-4 items-center ">
        <div className="border border-violet-700">
          <h3>This Dev page contents are below...</h3>
        </div>
        <div>
          <div className=" m-2 p-2 border bg-white rounded border-orange-900">
            <div className="bg-cyan-100">
              <h5>Options container</h5>
            </div>
            <div className=" text-center bg-yellow-100">
              <p>Options - @</p>
              <p>Options - @</p>
              <p>Delete Note</p>
              <p>Change Labels</p>
              <p>Options - @</p>
              <p>Options - @</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className=" m-2 p-2 rounded border-indigo-500 border ">
            <div className="bg-cyan-100">
              <h5>Options ---- container</h5>
            </div>
            <div className=" text-center bg-cyan-100">
              <p>Options - @</p>
              <p>Options - @</p>
              <p>Delete Note</p>
              <p>Change Labels</p>
              <p>Options - @</p>
              <p>Options - @</p>
            </div>
          </div>
          <div className=" m-2 p-2 border bg-white rounded border-orange-900">
            <div className="bg-cyan-100">
              <h5>Options ------- container</h5>
            </div>
            <div className="h-60 text-center bg-yellow-100">
              <p>Options - @</p>
              <p>Options - @</p>
              <p>Options - @</p>
              <p>Options - @</p>
              <p>Options - @</p>
              <p>Options - @</p>
              <p>Options - @</p>
            </div>
          </div>
          <div className=" m-2 p-2 border bg-white rounded border-orange-900">
            <div className="bg-cyan-100">
              <h5>This is label scroll container</h5>
            </div>
            <div className="h-48 overflow-y-scroll text-center bg-yellow-100">
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
              <p>Labels</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dev;
