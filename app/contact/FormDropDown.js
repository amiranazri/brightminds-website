"use client"

import React, {useState, useEffect} from 'react'

function FormDropDown({setState}) {
    const [selectedForm, setSelectedForm] = useState("Corporate");
    const [isOpen, setIsOpen] = useState(false);

    function selectFunc(value) {
        setIsOpen(false);
        setSelectedForm(value);
        setState(value);
    }

    return (
    <div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-primary-blue hover:bg-primary-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button" onClick={() => {setIsOpen(!isOpen)}}>{selectedForm}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-dropdown-trigger="click">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
        </button>

        {/* <!-- Dropdown menu --> */}
        <div id="dropdown" className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${isOpen ? "" : "hidden"}`} data-dropdown-trigger="click">
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton" data-dropdown-trigger="click">
            <li>
                <div className="block px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => {selectFunc("Corporate")}} data-dropdown-trigger="click">Corporate</div>
            </li>
            <li>
                <div className="block px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => {selectFunc("Student Inquiry")}}>Student Inquiry</div>
            </li>
            <li>
                <div className="block px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => {selectFunc("School Partnership")}}>School Partnership</div>
            </li>
            </ul>
        </div>
    </div>
    )
}

export default FormDropDown