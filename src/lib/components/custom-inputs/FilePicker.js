import React, { useState } from "react";

export function CustomSingleFilePicker(props) {
    let { horizontalForm = false, label = "Select a file" } = props;
    let fileUploadRef = React.createRef();
    const [fileName, setfileName] = useState(null);

    function handleFiles(e) {
        if (e.target.files[0]) {
            let { name } = e.target.files[0];
            setfileName(name);
        } else {
            setfileName(null);
        }
    }
    return (
        <div className={`flex ${horizontalForm ? "flex-row items-center" : "flex-col "}`}>
            <label className={`flex ${horizontalForm ? "pr-3" : "pl-3 mb-1"} text-grey-500`}>{label}</label>
            <input type="file" id="my_file" accept="image/*" style={{ display: "none" }} ref={fileUploadRef} onChange={handleFiles} />
            <button className="inline-block w-64 py-2 transition-colors duration-100 border rounded-md border-grey-400 hover:bg-teal-300 hover:text-white hover:border-teal-500 focus:outline-none" onClick={() => fileUploadRef.current?.click()}>
                {fileName !== null && fileName !== "" ? "Change file" : "Choose a file"}
            </button>
            <p className={`w-64 text-center text-blue-grey-300 mt-1 text-sm truncate transition-all max-h-0 ${fileName !== null && fileName !== "" ? "max-h-[100px]" : ""}`}>{fileName}</p>
        </div>
    );
}

export function CustomMultipleFilePicker(props) {
    let { horizontalForm = false, label = "Select files" } = props;
    let fileUploadRef = React.createRef();
    const [fileCountText, setfileCountText] = useState(null);

    function handleFiles(e) {
        if (e.target.files[0]) {
            let length = e.target.files.length;
            setfileCountText(`${length} ${length > 1 ? "files were selected" : "file was selected"}`);
        } else {
            setfileCountText(null);
        }
    }
    return (
        <div className={`flex ${horizontalForm ? "flex-row items-center" : "flex-col "}`}>
            <label className={`flex ${horizontalForm ? "pr-3" : "pl-3 mb-1"} text-grey-500`}>{label}</label>
            <input type="file" className="hidden" accept="image/*" ref={fileUploadRef} onChange={handleFiles} multiple />
            <button className="inline-block w-64 py-2 transition-colors duration-100 border rounded-md focus:outline-none border-grey-400 hover:bg-teal-300 hover:text-white hover:border-teal-500" onClick={() => fileUploadRef.current?.click()}>
                {fileCountText !== null && fileCountText !== "" ? "Change files" : "Choose files"}
            </button>
            <p className={`w-64 text-center text-blue-grey-300 mt-1 text-sm truncate transition-all max-h-0 ${fileCountText !== null && fileCountText !== "" ? "max-h-[100px]" : ""}`}>{fileCountText}</p>
        </div>
    );
}

export function CustomPreviewFilePicker(props) {
    let { horizontalForm = false, label = "Select files" } = props;

    let fileUploadRef = React.createRef();
    const [fileObject, setfileObject] = useState({
        selected: false,
        fileName: null,
        fileThumbSrc: null,
    });

    var maxW = 150;
    var maxH = 100;

    function handleFiles(e) {
        if (e.target.files[0]) {
            let { name } = e.target.files[0];
            var img = new Image();
            img.onload = function () {
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                var iw = img.width;
                var ih = img.height;
                var scale = Math.min(maxW / iw, maxH / ih);
                var iwScaled = iw * scale;
                var ihScaled = ih * scale;
                canvas.width = iwScaled;
                canvas.height = ihScaled;
                ctx.drawImage(img, 0, 0, iwScaled, ihScaled);

                setfileObject({
                    selected: true,
                    fileName: name,
                    fileThumbSrc: canvas.toDataURL(),
                });
            };
            img.src = URL.createObjectURL(e.target.files[0]);
        } else {
            setfileObject({
                selected: false,
                fileName: null,
                fileThumbSrc: null,
            });
        }
    }
    return (
        <div className={`flex ${horizontalForm ? "flex-row items-center" : "flex-col "}`}>
            <label className={`flex ${horizontalForm ? "pr-3" : "pl-3 mb-1"} text-grey-500`}>{label}</label>
            <input type="file" className="hidden" accept="image/*" ref={fileUploadRef} onChange={handleFiles} />
            <div className="flex flex-col ">
                {fileObject.selected ? (
                    <img src={fileObject.fileThumbSrc} className="w-56 border rounded-md bg-blue-grey-50 border-blue-grey-100" alt="Selected Preview" />
                ) : (
                    <div className="w-56 border rounded-md text-blue-grey-400 bg-blue-grey-50 border-blue-grey-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-32 m-auto" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4a1 1 0 00.71-1.7 1 1 0 00-1.42 0 1 1 0 00-.21.32A.84.84 0 0019 3a1 1 0 001 1zm0 9a1 1 0 00-1 1v.39l-1.48-1.48a2.77 2.77 0 00-3.93 0l-.7.7-2.48-2.49a2.86 2.86 0 00-3.93 0L5 12.6V7a1 1 0 011-1h10a1 1 0 000-2H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM6 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.29 4.3zm13-1a1 1 0 01-.18.53L14.31 15l.7-.7a.78.78 0 011.1 0L19 17.22zm1-14a1 1 0 00-1 1v4a1 1 0 002 0V6a1 1 0 00-1-1z" />
                        </svg>
                    </div>
                )}
                <button className="inline-block w-56 py-2 mt-2 transition-colors duration-100 border rounded-md focus:outline-none border-grey-400 hover:bg-teal-300 hover:text-white hover:border-teal-500" onClick={() => fileUploadRef.current?.click()}>
                    {fileObject.selected ? "Change file" : "Choose file"}
                </button>
                <p className={`w-56 text-center text-blue-grey-300 mt-1 text-sm truncate transition-all max-h-0 ${fileObject.selected ? "max-h-[100px]" : ""}`}>{fileObject.fileName}</p>
            </div>
        </div>
    );
}
