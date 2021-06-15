import React from "react";
import KycFrame from "../components/kyc_frame";
import { KycNotice } from "../components/kyc_notice";
import { KycSection } from "../components/kyc_sections";
import CompanyDetails from "../ui/company_details/company_details";
import './BootstrapDash Wizard_files/css';
import './BootstrapDash Wizard_files/bd-wizard.css';
// import './BootstrapDash Wizard_files/reg-style.css';
import ShareHolders from "../ui/share_holders/share_holders";
import CompanyDocuments from "../ui/company_documents/company_documents";

export default function KycUiMain() {
    let toggles = [
        {
            title: "Company",
            subtitle: "Details",
            svg: { __html: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M10,19 L21,19 L21,10 L10,10 L10,19 Z M8,19 L8,10 L3,10 L3,19 L8,19 Z M21,8 L21,5 L3,5 L3,8 L21,8 Z M2.81818182,3 L21.1818182,3 C22.1859723,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1859723,21 21.1818182,21 L2.81818182,21 C1.81402773,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.81402773,3 2.81818182,3 Z" fillRule="evenodd" /></svg>' },
            screen: <CompanyDetails />,
        },
        {
            title: "Shareholder",
            subtitle: "Details",
            svg: { __html: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13,13.5H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>' },
            screen: <ShareHolders />,
        },
        {
            title: "Company",
            subtitle: "Document",
            svg: { __html: '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 1c-.55 0-.99.45-.99 1L3 16c0 .55.44 1 1 1h10c.55 0 1-.45 1-1V6l-5-5H4zm6 5V2l4 4h-4z"/></svg>' },
            screen: <CompanyDocuments />,
        },
        {
            title: "",
            subtitle: "Declaration",
            svg: { __html: '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 1c-.55 0-.99.45-.99 1L3 16c0 .55.44 1 1 1h10c.55 0 1-.45 1-1V6l-5-5H4zm6 5V2l4 4h-4z"/></svg>' },
            screen: <Test3 />,
        },
    ];

    return <KycFrame toggles={toggles}>sdasd</KycFrame>;
}

function Test1() {
    return (
        <div>
            <KycNotice>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae sit sunt voluptas perferendis possimus quae odit facilis adipisci fugiat. Id error rerum facilis optio hic sint architecto explicabo soluta vel!</KycNotice>
            <KycSection>
                <div>Content section 1</div>
            </KycSection>
            <KycSection>Section 2</KycSection>
        </div>
    );
}
function Test2() {
    return <div>test2</div>;
}
function Test3() {
    return <div>test3</div>;
}
