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
                    <h3 className="mb-2 mt-5 text-center fw-bold">Products list</h3>
                    <ul className="list-group mb-5">
                        <CrudList />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CrudSection;
