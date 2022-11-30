import React from "react";
import CrudCreate from "../components/CrudCreate";
import CrudList from "../components/CrudList";

const CrudSection: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="container-forms d-flex justify-content-center gap-5 text-center mt-5">
                    <CrudCreate />
                </div>
                <div className="read">
                    <ul className="list-group my-5">
                        <CrudList />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CrudSection;
